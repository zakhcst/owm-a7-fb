import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSelectModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSnackBarModule,
  // MatTableModule,
  MatButtonModule,
  // MatIconModule,
  // MatProgressBarModule,
  // MatDividerModule,
  // MatPaginatorModule,
  // MatSidenavModule,
  MatToolbarModule,
  // MatListModule,
  // MatSortModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ]
})
export class AngularMaterialModule {}
