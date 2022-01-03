import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import data from '../assets/build-component.json'
import {Application} from './shared/models/config-declaration/application';
import {IApplication} from './shared/interfaces/config-declaration/application';
import {Question} from './shared/models/config-declaration/question';
import {IQuestionPackage} from './shared/interfaces/utility/question-package';
import {IQuestion} from './shared/interfaces/config-declaration/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appJson = (data as unknown);

  public appConfig: Application = new Application(this.appJson as IApplication);
  public appForm: FormGroup;

  public result?: Question;
  public resultControl?: FormControl;

  public showJson: boolean = false;


  constructor(
    private fb: FormBuilder
  ) {
    this.appForm = this.appConfig.getForm(null, this.fb, undefined);
  }

  public generateField() {
    if (!this.appForm.valid) {
      this.appForm.markAllAsTouched();
      return;
    }

    const formValue = this.appForm.getRawValue().questionBuilder;
    const validators = formValue.validation;

    console.log(formValue)

    const temp: IQuestion = {
      id: formValue.baseData.id,
      type: formValue.baseData.type,

      label: formValue.baseData.label ? {text: formValue.baseData.label} : undefined,
      options: formValue.options && formValue.options.length > 0 ? formValue.options : undefined,
      validation:formValue.baseData.addValidators ? formValue.validation : undefined,
    }

    this.result = new Question(temp);
    this.resultControl = this.result.control(null, this.fb, undefined);

  }
}
