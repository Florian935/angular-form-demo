import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-dynamic-form-group',
    templateUrl: './dynamic-form-group.component.html',
    styleUrls: ['./dynamic-form-group.component.scss'],
})
export class DynamicFormGroupComponent implements OnInit {
    profileForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.profileForm = this._formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: [''],
            address: this._formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                zip: [''],
            }),
            aliases: this._formBuilder.group({
                alias: [''],
            }),
        });

        this.profileForm.valueChanges.subscribe(console.log);
    }

    get dynamicControls(): FormGroup {
        return this.profileForm.get('aliases') as FormGroup;
    }

    getKeysOfObject(object: any): any {
        return Object.keys(object);
    }

    addAlias(name: string): void {
        if (name) {
            this.dynamicControls.addControl(name, new FormControl(''));
        }
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
