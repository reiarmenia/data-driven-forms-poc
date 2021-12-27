import {IQuestion} from '../interfaces/question';
import {IQuestionOption} from '../interfaces/question-option';
import {IQuestionValidation} from '../interfaces/question-validation';
import {Statements} from './statements';

export class Question implements IQuestion {

  public id: string;
  public type: "text" | "textarea" | "number" | "select" | "checkbox" | "date" | "radio";
  public label?: { text: string; position?: "before" | "after" };
  public options?: IQuestionOption[];
  public shouldAsk?: Statements;
  public validation?: IQuestionValidation;

  constructor(question: IQuestion) {
    this.id = question.id;
    this.type = question.type;
    this.label = question.label;
    this.options = question.options;
    this.shouldAsk = question.shouldAsk ? new Statements(question.shouldAsk) : undefined;

    this.validation = question.validation;
  }



}
