import {ISection} from '../interfaces/section';
import {Statements} from './statements';
import {QuestionGroup} from './question-group';
import {FormControl} from '@angular/forms';

export class Section implements ISection{

  public id: string;
  public questions: QuestionGroup;
  public repeat?: { style: "list" | "table"; minEntries?: number; maxEntries?: number };
  public shouldAsk?: Statements;
  public retainWhenNotAsked?: boolean;

  constructor(section: ISection) {
    this.id = section.id;
    this.questions = new QuestionGroup(section.questions);
    this.repeat = section.repeat;
    this.shouldAsk = section.shouldAsk ? new Statements(section.shouldAsk) : undefined;
    this.retainWhenNotAsked = section.retainWhenNotAsked;
  }

}
