import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedFormGroupRoutingModule } from './nested-form-group-routing.module';
import { NestedFormGroupComponent } from './nested-form-group.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [NestedFormGroupComponent],
    imports: [CommonModule, ReactiveFormsModule, NestedFormGroupRoutingModule],
})
export class NestedFormGroupModule {}
