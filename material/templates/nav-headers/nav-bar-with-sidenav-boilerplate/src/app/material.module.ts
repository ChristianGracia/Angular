import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, MatDatepickerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule,
  MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule]

})
export class MaterialModule {

}
