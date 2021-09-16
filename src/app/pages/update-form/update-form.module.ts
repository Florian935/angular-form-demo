import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFormRoutingModule } from './update-form-routing.module';
import { UpdateFormComponent } from './update-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UpdateFormComponent],
    imports: [CommonModule, ReactiveFormsModule, UpdateFormRoutingModule],
})
export class UpdateFormModule {}
