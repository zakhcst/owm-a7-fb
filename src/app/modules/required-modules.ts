import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LayoutsModules } from './layouts/layouts.modules';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { AppHistoryState, AppErrorsState } from '../states/app.state';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularMaterialModule,
    LayoutsModules,
    NgxsModule.forRoot([AppHistoryState, AppErrorsState],
      { developmentMode: !environment.production }),
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularMaterialModule,
    LayoutsModules,
    NgxsModule
  ]
})

export class RequiredModules {}
