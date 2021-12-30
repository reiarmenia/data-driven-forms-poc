import {IQuestionGroup} from './question-group';
import {IStatements} from './statments';

export interface ISection {

  id: string;
  sectionTitle?: string;

  questions: IQuestionGroup;
  questionOrder: string[];

  repeat?: {
    style: 'list' | 'table';
    minEntries?: number;
    maxEntries?: number;
  };
  shouldAsk?: IStatements;
  retainWhenNotAsked?: boolean;


}
