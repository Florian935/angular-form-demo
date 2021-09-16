import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
    profileForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.profileForm = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: [''],
            address: this._formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                zip: [''],
            }),
            aliases: this._formBuilder.array([this._formBuilder.control('')]),
        });

        this.profileForm.valueChanges.subscribe(console.log);
    }

    get aliases(): FormArray {
        return this.profileForm.get('aliases') as FormArray;
    }

    addAlias(): void {
        this.aliases.push(this._formBuilder.control(''));
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
}
