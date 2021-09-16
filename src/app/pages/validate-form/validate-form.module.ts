import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateFormRoutingModule } from './validate-form-routing.module';
import { ValidateFormComponent } from './validate-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ValidateFormComponent],
    imports: [CommonModule, ReactiveFormsModule, ValidateFormRoutingModule],
})
export class ValidateFormModule {}
