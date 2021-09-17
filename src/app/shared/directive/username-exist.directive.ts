import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

export function usernameExist(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return userService.checkifUsernameExists(control.value).pipe(
            map((res) => {
                return res ? { usernameExist: true } : null;
            }),
            catchError(() => of(null))
        );
    };
}
