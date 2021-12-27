import {IQuestionValidation} from './question-validation';
import {IQuestionOption} from './question-option';
import {IStatements} from './statments';

export interface IQuestion {

  id: string;
  type: 'text' | 'textarea' |
     'number' | 'select' |
     'checkbox' |
    'date' | 'radio';

  label?: {
    text: string;
    position?: 'before' | 'after';
  }

  validation?: IQuestionValidation;
  options?: IQuestionOption[];
  shouldAsk?: IStatements;

}
