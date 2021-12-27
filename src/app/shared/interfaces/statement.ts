import {IConditions} from './conditions';
import {ICustomConditions} from './custom-conditions';

export interface IStatement {

  sibling: string;
  conditions?: IConditions;
  customConditions?: ICustomConditions;
  check?: 'one' | 'all';

}
