import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../../models/config-declaration/section';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Question} from '../../models/config-declaration/question';
import {Observable, tap} from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() config!: Section;
  @Input() control?: FormGroup | FormArray | AbstractControl | null;

  public questionsInOrder?: { control: FormControl, config: Question }[];
  public shouldAsk: boolean = true;
  public changeEvents?: Observable<any>;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

    if (!this.config) {
      throw new TypeError('Section Component must be passed a Section Config.');
    }

    if (!this.control || !(this.control instanceof FormGroup || this.control instanceof FormArray)) {
      throw new TypeError('Section Component must be passed a Form Group or Form Array.');
    }

    if (this.control && this.control instanceof FormGroup){
      this.questionsInOrder = this.getQuestionsInOrder(this.control);
    }
    this.shouldAsk = this.config.getShouldAsk(this.control);
    const tempEvents = this.config.changeEvents(this.control);
    if (tempEvents) {
      this.changeEvents = this.config.changeEvents(this.control)?.pipe(
        tap(() => this.shouldAsk = this.control ? this.config.getShouldAsk(this.control) : true)
      );
    }

  }

  public getQuestions(inOrder?: boolean): Question[] {
    return inOrder ?? false ?
      Object.values(this.config.questions) :
      (this.config.questionOrder ?? [] as string[])
        .filter((key: string) => this.config.questions[key]).map((key: string) => this.config.questions[key]);
  }

  public getQuestionsInOrder(formGroup: AbstractControl): { control: FormControl, config: Question }[] {
    if (!(formGroup instanceof FormGroup)) return [];
    return this.getQuestions(true)
      .filter((question: Question) => formGroup.get(question.id))
      .map((config: Question) => ({config, control: formGroup.get(config.id) as FormControl}))
  }

  public getListControls(): AbstractControl[] | null {
    return this.control && this.control instanceof FormArray ? (this.control as FormArray).controls : null;
  }

  public addItemToList() {
    if (!(this.control instanceof FormArray)) return;
    const newGroup = this.config.formGroup( null, this.fb, undefined);
    (this.control as FormArray).push(newGroup);
  }

  public deleteItem(index: number) {
    if (!(this.control instanceof FormArray)) return;
    (this.control as FormArray).removeAt(index);
  }
}
