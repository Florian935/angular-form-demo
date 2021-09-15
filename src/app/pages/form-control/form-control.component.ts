import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
    name = new FormControl('');

    constructor() {}

    ngOnInit(): void {
        this.name.valueChanges.subscribe(console.log);
    }

    changeValue(): void {
        this.name.setValue('Hello world !');
    }
}
