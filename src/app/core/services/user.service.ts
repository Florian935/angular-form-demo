import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private takenUsernames = ['john', 'toto', 'lindsay'];

    constructor() {}

    checkifUsernameExists(username: string): Observable<boolean> {
        return of(this.takenUsernames.includes(username.toLowerCase())).pipe(
            delay(1000)
        );
    }
}
