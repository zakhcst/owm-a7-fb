import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { take, switchMap, map, filter } from 'rxjs/operators';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  redirectPage: string;
  errorMessage: string;
  viewCount: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.data
      .pipe(
        take(1),
        switchMap(activatedRouteData => {
          this.errorMessage = activatedRouteData.errorMessage;
          this.redirectPage = activatedRouteData.redirectPage;
          return timer(0, 1000);
        }),
        take(ConstantsService.redirectDelay + 1),
        map((timerCount: number) => {
          this.viewCount = ConstantsService.redirectDelay - timerCount;
          return timerCount;
        }),
        filter((timerCount: number) => timerCount === ConstantsService.redirectDelay)
      )
      .subscribe((timerCount: number) => {
          this._router.navigate([this.redirectPage]);
      });
  }
}
