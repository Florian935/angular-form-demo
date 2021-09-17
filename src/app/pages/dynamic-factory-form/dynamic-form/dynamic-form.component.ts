import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/core/services/question-control.service';
import { QuestionBase } from 'src/app/shared/model/question-base';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
    @Input() questions: Array<QuestionBase<string>> | null = [];
    form!: FormGroup;
    payLoad = '';

    constructor(private _questionControlService: QuestionControlService) {}

    ngOnInit() {
        this.form = this._questionControlService.toFormGroup(
            this.questions as Array<QuestionBase<string>>
        );
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }
}
