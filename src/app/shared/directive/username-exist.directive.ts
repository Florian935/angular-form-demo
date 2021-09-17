import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import {
    catchError,
    debounceTime,
    first,
    map,
    Observable,
    of,
    tap,
} from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

export function usernameExist(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return userService.checkifUsernameExists(control.value).pipe(
            debounceTime(2000),
            first(),
            map((res) => {
                console.log('CALL');
                return res ? { usernameExist: true } : null;
            }),
            catchError(() => of(null))
        );
    };
}
