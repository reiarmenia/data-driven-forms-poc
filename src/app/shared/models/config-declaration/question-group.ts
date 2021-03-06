import {IQuestionGroup} from '../../interfaces/config-declaration/question-group';
import {Question} from './question';
import {IQuestion} from '../../interfaces/config-declaration/question';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NormalizedValidator} from '../../types/normalized-validator';

export class QuestionGroup implements IQuestionGroup {

  [questionId: string]: Question;

  constructor(questions: IQuestionGroup) {
    Object.entries(questions).forEach(([key, value]: [string, IQuestion]) => {
      this[key] = new Question(value);
    });
  }
}
