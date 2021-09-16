import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/directive/forbidden-name.directive';

@Component({
    selector: 'app-validate-form',
    templateUrl: './validate-form.component.html',
    styleUrls: ['./validate-form.component.scss'],
})
export class ValidateFormComponent implements OnInit {
    profileForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.profileForm = this._formBuilder.group({
            firstName: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                    forbiddenNameValidator(/bob/i),
                ],
            ],
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

    get firstName(): FormControl {
        return this.profileForm.get('firstName') as FormControl;
    }
}
