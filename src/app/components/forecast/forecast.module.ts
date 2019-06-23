import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './forecast.component';
import { SharedModule } from '../../modules/shared.module';

const componentRoutes: Routes = [{ path: '', component: ForecastComponent }];

@NgModule({
  declarations: [ForecastComponent],
  imports: [SharedModule, RouterModule.forChild(componentRoutes)],
})
export class ForecastModule {}
