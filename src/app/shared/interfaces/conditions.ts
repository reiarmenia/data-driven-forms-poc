import {IStatement} from './statement';

export interface IConditions {
  statements: IStatement[];
  check: 'one' | 'all';
}
