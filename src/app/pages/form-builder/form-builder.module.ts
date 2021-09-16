import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [FormBuilderComponent],
    imports: [CommonModule, ReactiveFormsModule, FormBuilderRoutingModule],
})
export class FormBuilderModule {}
