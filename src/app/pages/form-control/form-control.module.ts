import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlRoutingModule } from './form-control-routing.module';
import { FormControlComponent } from './form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [FormControlComponent],
    imports: [CommonModule, ReactiveFormsModule, FormControlRoutingModule],
})
export class FormControlModule {}
