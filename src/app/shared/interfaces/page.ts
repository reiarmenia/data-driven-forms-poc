import {ISection} from './section';
import {IConditions} from './conditions';

export interface IPage {

  id: string;
  flattenSections?: boolean;

  sections: ISection[];
  order?: number;
  shouldDisplay?: IConditions;

}
