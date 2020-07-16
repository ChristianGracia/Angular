import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, MatDatepickerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule,
  MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule],


  exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
    MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule]

})
export class MaterialModule {

}
