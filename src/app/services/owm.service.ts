import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { OwmDataModel } from '../models/owm-data.model';

@Injectable({
  providedIn: 'root'
})
export class OwmService {
  constructor(private _http: HttpClient, private _errors: ErrorsService) {}

  getData(cityId: string): Observable<OwmDataModel> {
    const owmRequestUrl =
      ConstantsService.default5DayForecastUrl +
      '?id=' +
      cityId +
      '&units=' +
      ConstantsService.defaultUnits +
      '&APPID=' +
      ConstantsService.defaultAPPID;

    return this._http.get<OwmDataModel>(owmRequestUrl).pipe(
      catchError(err => {
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmService: getData: ' + err.message
        });
        return throwError(err);
      })
    );
  }
}
