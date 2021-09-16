import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormGroupRoutingModule } from './dynamic-form-group-routing.module';
import { DynamicFormGroupComponent } from './dynamic-form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [DynamicFormGroupComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        DynamicFormGroupRoutingModule,
    ],
})
export class DynamicFormGroupModule {}
