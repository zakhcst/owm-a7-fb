import { NgModule } from '@angular/core';
import { SortCitiesPipe } from 'src/app/pipes/sort-cities.pipe';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LayoutsModules } from './layouts/layouts.modules';

@NgModule({
  declarations: [
    SortCitiesPipe,
  ],
  imports: [
    AngularMaterialModule,
    LayoutsModules,
  ],
  exports: [
    SortCitiesPipe,
    AngularMaterialModule,
    LayoutsModules,
  ]
})
export class SharedModule { }
