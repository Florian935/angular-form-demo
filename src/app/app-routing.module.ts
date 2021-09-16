import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'form-control',
        loadChildren: () =>
            import('./pages/form-control/form-control.module').then(
                (m) => m.FormControlModule
            ),
    },
    {
        path: 'form-group',
        loadChildren: () =>
            import('./pages/group-form/group-form.module').then(
                (m) => m.GroupFormModule
            ),
    },
    {
        path: 'nested-form-group',
        loadChildren: () =>
            import('./pages/nested-form-group/nested-form-group.module').then(
                (m) => m.NestedFormGroupModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
