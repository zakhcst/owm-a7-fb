import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})

export class OwmStatsService {
  constructor(
    private _db: AngularFireDatabase,
    private _errors: ErrorsService
  ) {}

  getData() {
    return this._db
      .object('/stats')
      .valueChanges()
      .pipe(
        catchError(err => {
          this._errors.add({
            userMessage: 'Connection or service problem',
            logMessage: 'OwmStatsService ' + err.message
          });
          return throwError(new Error(err));
        })
      );
  }
}
