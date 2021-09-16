import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedFormGroupComponent } from './nested-form-group.component';

const routes: Routes = [{ path: '', component: NestedFormGroupComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NestedFormGroupRoutingModule {}
