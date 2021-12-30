import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../../models/section';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {Question} from '../../models/question';
import {Observable, tap} from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() config!: Section;
  @Input() control?: FormGroup | FormArray | AbstractControl | null;

  public questionsInOrder?: {control: FormControl, config: Question}[];
  public shouldAsk: boolean = true;
  public changeEvents?: Observable<any>;

  constructor() { }

  ngOnInit(): void {

    if (!this.config) {
      throw new TypeError('Section Component must be passed a Section Config.')
    }

    if (!this.control || !(this.control instanceof FormGroup || this.control instanceof FormArray)) {
      throw new TypeError('Section Component must be passed a Form Group or Form Array.')
    }

    this.questionsInOrder = this.getQuestionsInOrder();
    this.shouldAsk = this.config.getShouldAsk(this.control);
    const tempEvents = this.config.changeEvents(this.control);
    console.log(tempEvents);
    if (tempEvents) {
      this.changeEvents = this.config.changeEvents(this.control)?.pipe(
        tap(() => this.shouldAsk = this.control ? this.config.getShouldAsk(this.control) : true)
      );
    }

  }

  private getQuestionsInOrder(): {control: FormControl, config: Question}[] {
    return this.config.questionOrder
      .filter(key => (this.config.questions[key] && this.control?.get(key)))
      .map(key => {
        const control = this.control?.get(key) as FormControl;
        const config = this.config.questions[key];
        return ({control, config});
      });
  }

}
