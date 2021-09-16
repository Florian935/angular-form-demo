import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormGroupComponent } from './dynamic-form-group.component';

const routes: Routes = [{ path: '', component: DynamicFormGroupComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DynamicFormGroupRoutingModule {}
