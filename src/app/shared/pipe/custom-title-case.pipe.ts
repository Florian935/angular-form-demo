import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customtitlecase',
})
export class CustomTitleCasePipe implements PipeTransform {
    transform(value: string): string {
        return `${value[0].toUpperCase()}${value.slice(1)}`;
    }
}
