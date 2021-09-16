import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTitleCasePipe } from './custom-title-case.pipe';

@NgModule({
    declarations: [CustomTitleCasePipe],
    imports: [CommonModule],
    exports: [CustomTitleCasePipe],
})
export class SharedModule {}
