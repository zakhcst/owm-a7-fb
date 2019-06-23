import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';

import { SharedModule } from '../../modules/shared.module';
import { ResolverCitiesService } from '../../modules/routing-resolvers/resolver-cities.service';
import { ForecastGChartComponent } from './forecast-gchart.component';

const componentRoutes: Routes = [
  {
    path: '',
    component: ForecastGChartComponent,
    resolve: { cities: ResolverCitiesService },
  }
];

@NgModule({
  declarations: [ForecastGChartComponent,
  ],
  imports: [
    RouterModule.forChild(componentRoutes),
    SharedModule,
    GoogleChartsModule.forRoot(),
  ],
  exports: [RouterModule],
})

export class ForecastGChartModule { }
