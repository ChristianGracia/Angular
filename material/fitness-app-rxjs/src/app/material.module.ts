import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, MatDatepickerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule,
  MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule,
  MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
  MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
    MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule,
    MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule],


  exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
    MatToolbarModule, MatIconModule, MatListModule, MatTabsModule,
    MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
    MatTableModule, MatSortModule, MatPaginatorModule]

})
export class MaterialModule {

}
