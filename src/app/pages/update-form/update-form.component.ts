import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-update-form',
    templateUrl: './update-form.component.html',
    styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit {
    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl(''),
        }),
    });

    constructor() {}

    ngOnInit(): void {
        this.profileForm.valueChanges.subscribe(console.log);
    }

    onSubmit(): void {
        console.log(this.profileForm.value);
    }

    updateProfile(): void {
        // patchValue can update only certain fields. setValue must
        // contain an object that contains all the fields of the form
        this.profileForm.patchValue({
            firstName: 'Toto',
            address: {
                street: '500 Street Food',
            },
        });
    }

    setProfile(): void {
        this.profileForm.setValue({
            firstName: 'John',
            lastName: 'Doe',
            address: {
                street: '123 Drew Street',
                city: 'Paris',
                state: 'France',
                zip: '75000',
            },
        });
    }
}
