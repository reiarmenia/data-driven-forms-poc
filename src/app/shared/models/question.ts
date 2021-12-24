import {IQuestion} from '../interfaces/question';
import {IQuestionOption} from '../interfaces/question-option';
import {IQuestionValidation} from '../interfaces/question-validation';
import {FormBuilder, FormControl, ValidatorFn, Validators} from '@angular/forms';

export class Question<T> implements IQuestion {

  public id: string;
  public type: "text" | "textarea" | "number" | "select" |  "checkbox" | "date" | "radio";
  public label?: { text: string; position?: "before" | "after" };
  public options?: IQuestionOption[];
  public validation?: IQuestionValidation;

  public initialValue?: T | null;

  constructor(initialValue: T | null | undefined, question: IQuestion) {
    this.id = question.id;
    this.label = question.label;
    this.type = question.type;
    this.options = question.options;
    this.validation = question.validation;
    this.initialValue = initialValue
  }

  public createFormControl(fb: FormBuilder): FormControl {
    return fb.control(this.initialValue, this.getValidators())
  }

  public getValidators(): ValidatorFn[] {

    const validators: ValidatorFn[] = [];
    if (!this.validation) return validators;

    if (this.validation.min) validators.push(Validators.min(this.validation.min));
    if (this.validation.max) validators.push(Validators.max(this.validation.max));
    if (this.validation.required) validators.push(Validators.required);
    if (this.validation.requiredTrue) validators.push(Validators.requiredTrue);
    if (this.validation.minLength) validators.push(Validators.minLength(this.validation.minLength));
    if (this.validation.maxLength) validators.push(Validators.maxLength(this.validation.maxLength));
    if (this.validation.pattern) validators.push(Validators.pattern(this.validation.pattern));

    return validators;

  }

}
