import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-group-form',
    templateUrl: './group-form.component.html',
    styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent implements OnInit {
    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    });

    constructor() {}
    ngOnInit(): void {
        this.profileForm.valueChanges.subscribe(console.log);
    }

    onSubmit(): void {
        console.log(this.profileForm.value);
    }
}
