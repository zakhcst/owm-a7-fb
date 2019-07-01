import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { ResolverCitiesService } from '../../modules/routing-resolvers/resolver-cities.service';
import { ForecastGridComponent } from './forecast-grid.component';

const componentRoutes: Routes = [
  {
    path: '',
    component: ForecastGridComponent,
    resolve: { cities: ResolverCitiesService },
  }
];

@NgModule({
  declarations: [ForecastGridComponent,
  ],
  imports: [
    RouterModule.forChild(componentRoutes),
    SharedModule
  ],
  exports: [RouterModule],
})
export class ForecastGridModule { }
