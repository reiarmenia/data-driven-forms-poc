import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Question} from '../../models/config-declaration/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() config!: Question;
  @Input() control!: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.config) {
      throw new TypeError('Question component must be passed a Question Config.');
    }

    if (!this.control) {
      throw new TypeError('Question component must be passed a Form Control');
    }

  }

}
