import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFormComponent } from './group-form.component';

const routes: Routes = [{ path: '', component: GroupFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GroupFormRoutingModule {}
