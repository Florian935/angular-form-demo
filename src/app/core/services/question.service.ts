import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionBase } from 'src/app/shared/model/question-base';
import { QuestionDropdown } from 'src/app/shared/model/question-dropdown';
import { QuestionTextbox } from 'src/app/shared/model/question-textbox';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    getQuestions(): Observable<Array<QuestionBase<string>>> {
        const questions: Array<QuestionBase<string>> = [
            new QuestionDropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' },
                ],
                order: 3,
            }),

            new QuestionTextbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1,
            }),

            new QuestionTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2,
            }),
        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
}
