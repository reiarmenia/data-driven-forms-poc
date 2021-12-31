import {Component, Input, OnInit} from '@angular/core';
import {QuestionGroup} from '../../models/config-declaration/question-group';
import {AbstractControl, FormGroup} from '@angular/forms';
import {IQuestionPackage} from '../../interfaces/utility/question-package';
import {DynamicFormsUtils} from '../../utils/dynamic-forms';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss']
})
export class QuestionGroupComponent implements OnInit {

  @Input() questions!: QuestionGroup;
  @Input() questionOrder!: string[];
  @Input() control?: FormGroup | AbstractControl | null;

  public questionList?: IQuestionPackage[];

  constructor() { }

  ngOnInit(): void {
    if (!this.questions) {
      throw new TypeError('Question Group Component must be passed a Question Group Config.');
    }

    if(!this.questionOrder) {
      throw new TypeError('Question Group Component must be passed a Question Order.')
    }

    if (this.control === null || this.control === undefined || !(this.control instanceof FormGroup)) {
      throw new TypeError('Question Group Component must be passed a Form Group.')
    }

    this.questionList = DynamicFormsUtils.getQuestionControlPair(this.questions, this.control, this.questionOrder);

  }

}
