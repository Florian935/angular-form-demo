import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function lastFirstNameNotEqualValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const firstName = control.get('firstName');
        const lastName = control.get('lastName');

        return firstName && lastName && firstName.value === lastName.value
            ? { lastFirstNameAreEqual: true }
            : null;
    };
}
