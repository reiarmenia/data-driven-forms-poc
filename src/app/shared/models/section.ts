import {ISection} from '../interfaces/section';
import {Statements} from './statements';
import {QuestionGroup} from './question-group';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NormalizedValidator} from '../types/normalized-validator';

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

  public getForm(initialValue: any, fb: FormBuilder, customValidators?: Map<string, NormalizedValidator>): FormGroup | FormArray {
    if (this.repeat) {
      const arr = fb.array([]);
      if (initialValue && Array.isArray(initialValue)) {
        initialValue.forEach(value => arr.push(
          this.formGroup(value, fb, customValidators)
        ))
      }
      return arr;
    }
    return this.formGroup(initialValue, fb, customValidators);
  }

  public formGroup(initialValue: any, fb: FormBuilder, customValidators?: Map<string, NormalizedValidator>): FormGroup {
    // Todo: Get Cross Field Validators on all Questions.
    const controls = Object.entries(this.questions)
      .reduce((prev, curr) => ({
        ...prev,
        [`${curr[0]}`]: curr[1].control(initialValue[curr[0]] ?? null, fb, customValidators)
      }), {})
    return new FormGroup(controls);
  }
}
