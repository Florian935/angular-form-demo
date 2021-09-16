import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
    profileForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.profileForm = this._formBuilder.group({
            firstName: [''],
            lastName: [''],
            address: this._formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                zip: [''],
            }),
        });

        this.profileForm.valueChanges.subscribe(console.log);
    }

    onSubmit(): void {
        console.log(this.profileForm.value);
    }

    updateProfile(): void {
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
