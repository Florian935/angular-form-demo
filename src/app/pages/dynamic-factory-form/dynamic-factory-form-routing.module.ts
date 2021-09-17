import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFactoryFormComponent } from './dynamic-factory-form.component';

const routes: Routes = [{ path: '', component: DynamicFactoryFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DynamicFactoryFormRoutingModule {}
