import { NgModule } from '@angular/core';
import { SortCitiesPipe } from 'src/app/pipes/sort-cities.pipe';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LayoutsModules } from './layouts/layouts.modules';
import { ReplacePipe } from '../pipes/replace.pipe';
import { SortKeysPipe } from '../pipes/sort-keys.pipe';

@NgModule({
  declarations: [
    SortCitiesPipe,
    ReplacePipe,
    SortKeysPipe,
  ],
  imports: [
    AngularMaterialModule,
    LayoutsModules,
  ],
  exports: [
    SortCitiesPipe,
    ReplacePipe,
    SortKeysPipe,
    AngularMaterialModule,
    LayoutsModules,
  ]
})
export class SharedModule { }
