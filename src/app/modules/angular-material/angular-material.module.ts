import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSelectModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSnackBarModule
  // MatTableModule,
  // MatButtonModule,
  // MatIconModule,
  // MatProgressBarModule,
  // MatDividerModule,
  // MatPaginatorModule,
  // MatSidenavModule,
  // MatToolbarModule,
  // MatListModule,
  // MatSortModule,
  // MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule {}
