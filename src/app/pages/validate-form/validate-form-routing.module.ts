import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateFormComponent } from './validate-form.component';

const routes: Routes = [{ path: '', component: ValidateFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ValidateFormRoutingModule {}
