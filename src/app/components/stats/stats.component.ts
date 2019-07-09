import { Component, OnInit } from '@angular/core';
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
import { IHistoryLog } from 'src/app/models/history-log.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  animations: [
    trigger('showStats', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger('0.01s', [animate('0.2s', style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class StatsComponent implements OnInit {
  ip: string;
  stats: IOwmStats;
  cities: ICities;
  historyLog: any[];
  citiesLength = 0;
  loadingError = false;
  checkedCities = true;
  showDetails = {};

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.data.subscribe(data => {
      this.ip = data.ip;
      this.stats = data.stats;
      this.cities = {
        ...data.cities,
        // ...Object.fromEntries(
        //   Object.entries(data.cities).map(ent => {
        //     ent[0] = ent[0] + 'xx';
        //     return ent;
        //   })
        // )
      };
      this.citiesLength = Object.keys(data.cities).length;
      this.historyLog = {
        ...data.historyLog,
        // ...Object.fromEntries(
        //   Object.entries(data.historyLog).map(ent => {
        //     ent[0] = ent[0] + 'xx';
        //     return ent;
        //   })),
        // ...Object.fromEntries(
        //   Object.entries(data.historyLog).map(ent => {
        //     ent[0] = ent[0] + 'xxxxx';
        //     return ent;
        //   })),
      };
      // Object.entries(data.historyLog).reduce((acc, ipEntry ) => {
      //   const timeEntries = Object.entries(ip)
      //   acc.push({});
      //   return acc;
      // }, []);
    });
  }
}
