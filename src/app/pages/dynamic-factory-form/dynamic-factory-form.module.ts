import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFactoryFormRoutingModule } from './dynamic-factory-form-routing.module';
import { DynamicFactoryFormComponent } from './dynamic-factory-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
    declarations: [DynamicFactoryFormComponent, DynamicFormComponent, DynamicFormQuestionComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DynamicFactoryFormRoutingModule,
    ],
})
export class DynamicFactoryFormModule {}
