import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from 'src/app/components/error-page/error-page.component';
import { SharedModule } from './shared.module';
import { HeaderToolbarComponent } from 'src/app/components/header-toolbar/header-toolbar.component';
import { HeaderToolbarModule } from '../components/header-toolbar/header-toolbar.module';

const stats = { path: 'stats', title: 'Stats', type: 'button' };
const gchart = { path: 'forecast-gchart', title: 'GChart', type: 'button' };
const forecastFlex = { path: 'forecast-flex', title: 'Flex', type: 'button' };
const forecastAll = { path: '/forecast-all', title: 'All', type: 'button' };
const selectCities = { path: '', title: 'selectCities', type: 'selectCities' };

const appRoutes: Routes = [
  {
    path: 'toolbar',
    component: HeaderToolbarComponent,
    data: {
      toolbarActions: {
        stats: [
          forecastFlex,
          gchart,
          forecastAll,
        ],
        'forecast-flex': [
          selectCities,
          stats,
          gchart,
          forecastAll,
        ],
        'forecast-gchart': [
          selectCities,
          stats,
          forecastFlex,
          forecastAll,
        ]
        // stats1: { stats: true, text: true, all: true },
        // 'forecast-Flex': {
        //   stats: 'button',
        //   'forecast-all': 'button',
        //   selectCities: 'selectCities',
        //   'google-chart': 'button'
        // }
      }
    },
    children: [
      {
        path: 'stats',
        loadChildren: 'src/app/components/stats/stats.module#StatsModule',
        pathMatch: 'full'
      },
      {
        path: 'forecast-flex',
        loadChildren: 'src/app/components/forecast-flex/forecast-flex.module#ForecastFlexModule',
        pathMatch: 'full'
      },
      {
        path: 'forecast-gchart',
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
  { path: 'error', component: ErrorPageComponent },
  { path: '', redirectTo: 'toolbar/forecast-flex', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot(
      appRoutes
      // , { enableTracing: true } // <-- debugging purposes only
    ),
    HeaderToolbarModule
  ],
  exports: [SharedModule, RouterModule]
})
export class AppRoutingModule { }
