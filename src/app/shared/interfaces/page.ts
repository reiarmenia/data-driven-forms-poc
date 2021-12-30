import {ISection} from './section';
import {IStatements} from './statments';

export interface IPage {

  id: string;
  pageTitle?: string;

  sections: ISection[];

  shouldAsk?: IStatements;
  retainWhenNotAsked?: boolean;


}
