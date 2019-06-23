import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  trigger,
  // state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { take, filter, map, distinctUntilKeyChanged } from 'rxjs/operators';

import { Select } from '@ngxs/store';
import { AppErrorPayloadModel, AppHistoryModel } from '../../states/app.models';
import { ITimeTemplate } from '../../models/hours.model';

import { ConstantsService } from '../../services/constants.service';
import { OwmDataService } from '../../services/owm-data.service';
import { ErrorsService } from '../../services/errors.service';
import { IOwmData } from 'src/app/models/owm-data.model';

@Component({
  selector: 'app-forecast-grid',
  templateUrl: './forecast-grid.component.html',
  styleUrls: ['./forecast-grid.component.css'],
  animations: [
    trigger('showTimeSlot', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger('0.1s', [
              animate(
                '0.3s',
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

export class ForecastGridComponent implements OnInit, OnDestroy {

  timeTemplate: ITimeTemplate[] = ConstantsService.timeTemplate;
  iconsUrl: string = ConstantsService.owmIconsUrl;
  iconsOwm: string = ConstantsService.iconsOwm;
  iconWind: string = ConstantsService.iconWind;
  iconHumidity: string = ConstantsService.iconHumidity;
  iconPressure: string = ConstantsService.iconPressure;
  arrow000Deg: string = ConstantsService.arrow000Deg;
  cardBackground: string;
  dateColumnTextColor: string;

  loadingOwmData = true;
  loadingStats = true;
  loadingError = false;

  weatherData: any;
  listByDateLength = 0;
  weatherData$: Observable<IOwmData>;
  weatherDataSubscription: Subscription;

  @Select((state: any) => state.activity) activity$: Observable<
    AppHistoryModel
  >;

  constructor(private _data: OwmDataService, private _errors: ErrorsService) { }

  ngOnInit() {
    this.activity$
      .pipe(
        map(
          activity =>
            activity.sessionHistory[activity.sessionHistory.length - 1]
        ),
        distinctUntilKeyChanged('cityId'),
        filter(activity => activity['cityId'] !== 'Init')
      )
      .subscribe(activity => {
        this.onChange(activity.cityId);
      });
  }

  ngOnDestroy() {
    this.weatherDataSubscription.unsubscribe();
  }

  onChange(eventSelectedCityId: string) {
    this.loadingOwmData = true;
    this.weatherData$ = this._data.getData(eventSelectedCityId).pipe(take(1));

    this.weatherDataSubscription = this.weatherData$.subscribe(
      data => {
        this.weatherData = data;
        this.listByDateLength = Object.keys(data.listByDate).length;

        this.loadingOwmData = false;
        this.setCardBg2TimeSlotBg();
      },
      err => {
        this.loadingOwmData = false;
        this.loadingError = true;
        this.addError('ForecastFlexComponent: ngOnInit: onChange: subscribe', err.message);
      }
    );
  }

  setCardBg2TimeSlotBg() {
    const hour = new Date().getHours();
    const timeSlot = this.timeTemplate.find(
      timeSlotStart =>
        timeSlotStart.hour <= hour && timeSlotStart.hour + 3 > hour
    );
    this.cardBackground = timeSlot.bgColor;
    this.dateColumnTextColor = timeSlot.textColor;
  }
  isCurrentTimeSlot(timeSlot) {
    const hour = new Date().getHours();
    return timeSlot.hour <= hour && hour < timeSlot.hour + 3;
  }

  addError(custom: string, errorMessage: string) {
    const errorLog: AppErrorPayloadModel = {
      userMessage: 'Connection or service problem. Please reload or try later.',
      logMessage: `ForecastGridComponent: ${custom}: ${errorMessage}`
    };
    this._errors.add(errorLog);
  }
}
