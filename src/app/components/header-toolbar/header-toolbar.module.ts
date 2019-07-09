import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { HeaderToolbarComponent } from './header-toolbar.component';
import { ActionButtonComponent } from '../action-button/action-button.component';

@NgModule({
  declarations: [HeaderToolbarComponent, ActionButtonComponent],
  imports: [RouterModule, SharedModule],
  exports: [
    RouterModule,
    SharedModule,
    HeaderToolbarComponent,
    ActionButtonComponent
  ]
})
export class HeaderToolbarModule {}
