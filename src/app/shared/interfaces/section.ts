import {IQuestionGroup} from './question-group';
import {IStatements} from './statments';

export interface ISection {

  id: string;
  repeat?: {
    style: 'list' | 'table';
    minEntries?: number;
    maxEntries?: number;
  }
  questions: IQuestionGroup;
  shouldDisplay?: IStatements;


}
