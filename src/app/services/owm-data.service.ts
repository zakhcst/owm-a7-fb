import { Injectable } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { OwmService } from './owm.service';
import { DataService } from './data.service';
import { CitiesService } from './cities.service';
import { OwmFallbackDataService } from './owm-fallback-data.service';
import { ErrorsService } from './errors.service';
import { OwmDataModel } from '../models/owm-data.model';

@Injectable({
  providedIn: 'root'
})
export class OwmDataService {
  constructor(
    private _owm: OwmService,
    private _fb: DataService,
    private _cities: CitiesService,
    private _owmFallback: OwmFallbackDataService,
    private _errors: ErrorsService
  ) {}

  // Caching the data for 3h
  // in order to prevent exceeding OWM requests dev quote.
  // The additional logic for processing/reformating the data
  // is required in the front end in order to avoid
  // http requests out of Firebase Cloud Functions
  getData(cityId: string) {
    return this._cities.updateReads(cityId).pipe(
      switchMap(() => from(this._fb.getData(cityId))),
      switchMap((fbdata: OwmDataModel) => {
        if (fbdata !== null && this.isNotExpired(fbdata)) {
          return of(fbdata);
        }
        return this.requestNewOwmData(cityId).pipe(switchMap(() => of(fbdata)));
      }),
      catchError(err => {
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmDataService:getData:_fb.getData: ' + err.message
        });
        return this._owmFallback.getData();
      })
    );
  }

  requestNewOwmData(cityId: string) {
    return this._owm.getData(cityId).pipe(
      map((res: OwmDataModel) => this.setListByDate(res)),
      switchMap(res => from(this._fb.setData(cityId, res))),
    );
  }

  setListByDate(data: OwmDataModel): OwmDataModel {
    data.listByDate = data.list.reduce((accumulator: any, item: any) => {
      const dateObj = new Date(item.dt * 1000);
      const hour = dateObj.getUTCHours();
      const date = dateObj.setHours(0);

      if (accumulator[date]) {
        accumulator[date][hour] = item;
      } else {
        accumulator[date] = {};
        accumulator[date][hour] = item;
      }
      return accumulator;
    }, {});
    data.updated = new Date().valueOf();
    return data;
  }

  isNotExpired(data: OwmDataModel): boolean {
    // expired data is when either [0] || .updated is older than 3 hours
    const now = new Date().valueOf();
    const firstDateTime =
      data.list && data.list.length > 0 && data.list[0].dt
        ? data.list[0].dt * 1000
        : 0;
    const diff = now - (data.updated || firstDateTime || 0);
    return diff < 3 * 3600 * 1000; // < 3 hours
  }
}
