import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, MatDatepickerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule,
  MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule,
  MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
  MatProgressSpinnerModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
    MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule],


  exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
    MatToolbarModule, MatIconModule, MatListModule, MatTabsModule,
    MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule]

})
export class MaterialModule {

}
