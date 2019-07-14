import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { HeaderToolbarComponent } from './header-toolbar.component';

@NgModule({
  declarations: [HeaderToolbarComponent],
  imports: [RouterModule, SharedModule],
  exports: [
    RouterModule,
    SharedModule,
    HeaderToolbarComponent,
  ]
})
export class HeaderToolbarModule {}
