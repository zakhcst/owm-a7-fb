import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { ResolverCitiesService } from '../../modules/routing-resolvers/resolver-cities.service';
import { ForecastFlexComponent } from './forecast-flex.component';

const componentRoutes: Routes = [
  {
    path: '',
    component: ForecastFlexComponent,
    resolve: { cities: ResolverCitiesService }
  }
];

@NgModule({
  declarations: [ForecastFlexComponent],
  imports: [RouterModule.forChild(componentRoutes), SharedModule],
  exports: [RouterModule]
})
export class ForecastFlexModule {}
