import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, MatDatepickerModule,
  MatInputModule, MatFormFieldModule, MatButtonModule,
  MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule]

})
export class MaterialModule {

}
