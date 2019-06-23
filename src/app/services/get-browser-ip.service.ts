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

  constructor(private _http: HttpClient, private _errors: ErrorsService) { }

  getIP() {
    if (!this._cache$) {
      this._cache$ = this.requestIP().pipe(
        switchMap((ipString: string) => {
          if (this.validateIP(ipString)) {
            return of(ipString);
          }
          return of('ip-error');
        }),
        catchError(err => {
          this._errors.add({
            userMessage: 'Connection or service problem',
            logMessage: 'GetBrowserIpService: getIP: ' + err.message
          });
          return of('ip-error');
        }),
        shareReplay(1),
      );
    }
    return this._cache$;
  }

  requestIP(): Observable<string> {
    return this._http
      .get(ConstantsService.getIpUrl, { responseType: 'text' });
  }

  validateIP(testString: string): boolean {
    return ConstantsService.ipv4RE.test(testString);
  }
}
