import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, MatDatepickerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule,
  MatCheckboxModule, MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule]

})
export class MaterialModule {

}
