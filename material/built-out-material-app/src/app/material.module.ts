import { NgModule } from '@angular/core';

import { MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule]

})
export class MaterialModule {

}
