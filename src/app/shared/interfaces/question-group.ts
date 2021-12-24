import {Question} from '../models/question';

export interface IQuestionGroup {

  [questionId: string]: Question<unknown>

}
