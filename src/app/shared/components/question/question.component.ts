import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../interfaces/question';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() config!: IQuestion;
  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
    if (!this.config) {
      throw new TypeError('Question component must be passed a Question Configuration.')
    }

    if (!this.control) {
      throw new TypeError('Question component must be passed a FormControl')
    }

  }

}
