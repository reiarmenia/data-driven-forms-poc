import {IQuestionGroup} from './question-group';

export interface Section {

  id: string;
  repeat?: {
    style: 'list' | 'table';
  }
  questions: IQuestionGroup;



}
