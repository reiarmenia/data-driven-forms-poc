import {ISection} from './section';
import {IStatements} from './statments';

export interface IPage {

  id: string;

  sections: ISection[];
  order?: number;
  shouldDisplay?: IStatements;

}
