import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { IOwmData } from '../models/owm-data.model';

@Injectable({
  providedIn: 'root'
})
export class OwmService {
  constructor(private _http: HttpClient, private _errors: ErrorsService) {}

  getData(cityId: string): Observable<IOwmData> {
    const owmRequestUrl =
      ConstantsService.default5DayForecastUrl +
      '?id=' +
      cityId +
      '&units=' +
      ConstantsService.defaultUnits +
      '&APPID=' +
      ConstantsService.defaultAPPID;

    return this._http.get<IOwmData>(owmRequestUrl).pipe(
      catchError(err => {
        // openweathermap.org/faq
        // Q: API calls return an error 429
        // A: You will get the error 429 if you have FREE tariff and make more than 60 API calls per minute
        // To do update error message at quota error
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmService: getData: ' + err.message
        });
        return throwError(err);
      })
    );
  }
}
