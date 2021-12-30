import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import data from '../assets/build-component.json'
import {Application} from './shared/models/application';
import {IApplication} from './shared/interfaces/application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appConfig: Application;
  public appForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.appConfig = new Application(data as IApplication);
    this.appForm = this.appConfig.getForm(null, this.fb, undefined);
    console.log('config', this.appConfig);
    console.log('form', this.appForm);
  }

  public printFormState() {
    console.log('application form state', this.appForm);
    console.log('application form value', this.appForm.getRawValue())
  }
}
