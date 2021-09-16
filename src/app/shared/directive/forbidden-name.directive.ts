import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isForbidden: boolean = nameRegex.test(control.value);

        return isForbidden ? { forbiddenName: { value: control.value } } : null;
    };
}
