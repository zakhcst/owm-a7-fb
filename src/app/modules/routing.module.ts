import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { HeaderToolbarComponent } from '../components/header-toolbar/header-toolbar.component';
import { HeaderToolbarModule } from '../components/header-toolbar/header-toolbar.module';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
// import { HomeComponent } from '../components/home/home.component';
import { HomeModule } from '../components/home/home.module';

const stats = { path: 'stats', title: 'Stats', type: 'button' };
const forecastGChart = { path: 'forecast-gchart', title: 'GChart', type: 'button' };
const forecastFlex = { path: 'forecast-flex', title: 'Flex', type: 'button' };
const forecastGrid = { path: 'forecast-grid', title: 'Grid', type: 'button' };
const forecastAll = { path: '/forecast-all', title: 'All', type: 'button' };
const selectCities = { path: '', title: 'selectCities', type: 'selectCities' };

const appRoutes: Routes = [
  {
    path: 'v1',
    component: HeaderToolbarComponent,
    data: {
      toolbarActions: {
        'stats': [
          forecastFlex,
          forecastGrid,
          forecastGChart,
          stats,
          forecastAll,
        ],
        'forecast-flex': [
          selectCities,
          forecastFlex,
          forecastGrid,
          forecastGChart,
          stats,
          forecastAll,
        ],
        'forecast-grid': [
          selectCities,
          forecastFlex,
          forecastGrid,
          forecastGChart,
          stats,
          forecastAll,
        ],
        'forecast-gchart': [
          selectCities,
          forecastFlex,
          forecastGrid,
          forecastGChart,
          stats,
          forecastAll,
        ]
      }
    },
    children: [
      {
        path: stats.path,
        loadChildren: 'src/app/components/stats/stats.module#StatsModule',
        pathMatch: 'full'
      },
      {
        path: forecastFlex.path,
        loadChildren: 'src/app/components/forecast-flex/forecast-flex.module#ForecastFlexModule',
        pathMatch: 'full'
      },
      {
        path: forecastGrid.path,
        loadChildren: 'src/app/components/forecast-grid/forecast-grid.module#ForecastGridModule',
        pathMatch: 'full'
      },
      {
        path: forecastGChart.path,
        loadChildren: 'src/app/components/forecast-gchart/forecast-gchart.module#ForecastGChartModule',
        pathMatch: 'full'
      },
      { path: '', redirectTo: 'stats', pathMatch: 'full' },
    ]
  },
  {
    path: 'forecast-all',
    loadChildren: 'src/app/components/forecast/forecast.module#ForecastModule'
  },
  {
    path: 'home',
    loadChildren: 'src/app/components/home/home.module#HomeModule'
  },
  { path: 'error', component: ErrorPageComponent, data: { errorMessage: ' Error Page', redirectPage: 'home'} },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent, data: { errorMessage: ' Page Not Found', redirectPage: 'home'} }
];

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot(
      appRoutes
      // , { enableTracing: true } // debugging only
    ),
    HeaderToolbarModule,
    HomeModule
  ],
  exports: [SharedModule, RouterModule]
})
export class AppRoutingModule { }
