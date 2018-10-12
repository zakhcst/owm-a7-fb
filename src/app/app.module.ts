import { NgModule } from '@angular/core';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { RequiredModules } from './modules/required-modules';

import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { AppSnackBarInnerComponent } from './components/app-snack-bar-inner/app-snack-bar-inner.component';
import { SortCitiesPipe } from './pipes/sort-cities.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    AppSnackBarInnerComponent,
    SortCitiesPipe,
  ],
  imports: [
    RequiredModules,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  entryComponents: [AppSnackBarInnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
