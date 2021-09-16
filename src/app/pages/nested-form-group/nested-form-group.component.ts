import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-nested-form-group',
    templateUrl: './nested-form-group.component.html',
    styleUrls: ['./nested-form-group.component.scss'],
})
export class NestedFormGroupComponent implements OnInit {
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
}
