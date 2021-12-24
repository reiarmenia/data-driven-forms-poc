import {IQuestionGroup} from './question-group';
import {IConditions} from './conditions';

export interface ISection {

  id: string;
  repeat?: {
    style: 'list' | 'table';
  }
  questions: IQuestionGroup;
  shouldDisplay?: IConditions;


}
