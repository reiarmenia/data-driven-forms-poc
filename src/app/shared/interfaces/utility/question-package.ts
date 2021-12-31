import {FormControl} from '@angular/forms';
import {Question} from '../../models/config-declaration/question';

export interface IQuestionPackage {
  control: FormControl;
  config: Question;
}
