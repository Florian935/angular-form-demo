import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from 'src/app/core/services/question.service';
import { QuestionBase } from 'src/app/shared/model/question-base';

@Component({
    selector: 'app-dynamic-factory-form',
    templateUrl: './dynamic-factory-form.component.html',
    styleUrls: ['./dynamic-factory-form.component.scss'],
})
export class DynamicFactoryFormComponent {
    questions$: Observable<Array<QuestionBase<any>>>;

    constructor(_questionService: QuestionService) {
        this.questions$ = _questionService.getQuestions();
    }
}
