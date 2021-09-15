import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupFormRoutingModule } from './group-form-routing.module';
import { GroupFormComponent } from './group-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [GroupFormComponent],
    imports: [CommonModule, ReactiveFormsModule, GroupFormRoutingModule],
})
export class GroupFormModule {}
