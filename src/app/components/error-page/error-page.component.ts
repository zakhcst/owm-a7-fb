import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  redirectDelay = 6;
  redirectPage = '/toolbar/forecast-flex';
  count;

  constructor(private _router: Router) { }

  ngOnInit() {
    timer(0, 1000).pipe(take(this.redirectDelay))
      .subscribe(count => {
        this.count = this.redirectDelay - count - 1;
        if (this.count === 0) {
          this._router.navigate([this.redirectPage]);
        }
      });
  }
}
