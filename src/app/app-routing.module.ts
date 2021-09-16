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
    {
        path: 'update-form',
        loadChildren: () =>
            import('./pages/update-form/update-form.module').then(
                (m) => m.UpdateFormModule
            ),
    },
    {
        path: 'form-builder',
        loadChildren: () =>
            import('./pages/form-builder/form-builder.module').then(
                (m) => m.FormBuilderModule
            ),
    },
    {
        path: 'validate-form',
        loadChildren: () =>
            import('./pages/validate-form/validate-form.module').then(
                (m) => m.ValidateFormModule
            ),
    },
    {
        path: 'dynamic-form',
        loadChildren: () =>
            import('./pages/dynamic-form/dynamic-form.module').then(
                (m) => m.DynamicFormModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
