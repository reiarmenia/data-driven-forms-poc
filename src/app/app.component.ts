import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // questionTest = new Question(null, {
  //   id: 'itemInFridge',
  //   type: 'text',
  //   label: {text: 'An Item In Your Fridge'},
  // });
  //
  // questionControl = this.questionTest.createFormControl(this.fb)

  constructor(
    private fb: FormBuilder
  ) {
  }

}
