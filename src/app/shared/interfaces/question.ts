import {IQuestionValidation} from './question-validation';
import {IQuestionOption} from './question-option';
import {IStatements} from './statments';
import {ICustomValidation} from './custom-validation';

export interface IQuestion {

  id: string;
  type: 'text' | 'textarea' |
    'number' | 'select' |
    'checkbox' |
    'date' | 'radio';

  label?: {
    text: string;
    position?: 'before' | 'after';
  };

  validation?: IQuestionValidation;
  customValidation?: ICustomValidation;
  options?: IQuestionOption[];
  shouldAsk?: IStatements;
  retainWhenNotAsked?: boolean;

  isFlag?: boolean;

}
