import { Injectable } from '@angular/core';

import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OwmStatsService } from '../../services/owm-stats.service';
import { IOwmStats } from '../../models/owm-stats.model';

@Injectable({
  providedIn: 'root'
})
export class ResolverStatsService implements Resolve<IOwmStats> {
  constructor(private _stats: OwmStatsService, private _router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IOwmStats> | Observable<never> {
    return this._stats.getData()
      .pipe(
        take(1)
      );
  }
}

