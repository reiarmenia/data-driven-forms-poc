import {IConditions} from './conditions';
import {QuestionTypePropTypes} from '../types/question-type-prop-types';
import {ICustomConditions} from './custom-conditions';

export interface IStatement {

  sibling: string;
  conditions?: IConditions;
  customConditions?: ICustomConditions;
  check: 'one' | 'all';

}
