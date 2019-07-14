import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { of, Observable } from 'rxjs';
import { switchMap, share, catchError, shareReplay } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
@Injectable({
  providedIn: 'root'
})
export class GetBrowserIpService {
  private _cache$: Observable<string>;
  private ipError = false;

  constructor(private _http: HttpClient, private _errors: ErrorsService) {}

  getIP() {
    if (!this._cache$ || this.ipError) {
      this._cache$ = this.requestIP().pipe(
        switchMap(this.validateIP),
        catchError(err => {
          this._errors.add({
            userMessage: 'Connection or service problem',
            logMessage: 'GetBrowserIpService: getIP: ' + err.message
          });
          return this.setIPError();
        }),
        shareReplay(1)
      );
    }
    return this._cache$;
  }

  setIPError() {
    this.ipError = true;
    return of('ip-error');
  }

  requestIP(): Observable<string> {
    return this._http.get(ConstantsService.getIpUrl, { responseType: 'text' });
  }

  validateIP(ipString: string): Observable<string> {
    if (ConstantsService.ipv4RE.test(ipString)) {
      this.ipError = false;
      return of(ipString);
    }
    return this.setIPError();
  }
}
