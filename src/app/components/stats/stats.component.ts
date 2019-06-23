import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IOwmStats } from 'src/app/models/owm-stats.model';
import { ICities } from 'src/app/models/cities.model';
import {
  trigger,
  // state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  animations: [
    trigger('showCityStats', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger('0.01s', [
              animate(
                '0.2s',
                style({ opacity: 1 })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class StatsComponent implements OnInit {
  // @HostBinding('@showCityStats')

  ip: string;
  stats: IOwmStats;
  cities: ICities;
  citiesLength = 0;
  loadingError = false;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.data
      .subscribe((data) => {
        this.ip = data.ip;
        this.stats = data.stats;
        this.cities = data.cities;
        this.citiesLength = Object.keys(data.cities).length;
      });
  }
}
