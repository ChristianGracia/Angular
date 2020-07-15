import { NgModule } from '@angular/core';

import { MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule]

})
export class MaterialModule {

}
