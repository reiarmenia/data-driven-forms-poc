import {IStatement} from '../interfaces/statement';
import {IConditions} from '../interfaces/conditions';
import {ICustomConditions} from '../interfaces/custom-conditions';
import {ConditionsFunction} from '../types/conditions-function';
import {BASE_CONDITIONS_MAP} from '../maps/conditions';
import {AbstractControl} from '@angular/forms';

export class Statement implements IStatement{

  public sibling: string;
  public conditions?: IConditions;
  public customConditions?: ICustomConditions;
  public check?: 'one' | 'all';

  constructor(statement: IStatement) {

    this.sibling = statement.sibling;
    this.conditions = statement.conditions;
    this.customConditions = statement.customConditions;
    this.check  = statement.check;

  }

  public getArgControl(control: AbstractControl): AbstractControl | null {

    let sibling: AbstractControl | null = null;

    if (control.get(this.sibling)){
      sibling = control.get(this.sibling)
    } else {
      let check = control.parent;
      while (check) {
        if(check && check.get(this.sibling)) {
          sibling = check.get(this.sibling);
        } else {
          check = check.parent || null;
        }
      }
    }

    if (sibling === null) {
      console.warn(`Statement could not parse arg of ${sibling} on control: `, control);
    }
    return sibling !== null ? sibling : null;

  }

  public checkStatement(argValue: any, customConditions?: Map<string, ConditionsFunction>): boolean {

    const conditionsMap = new Map<string, ConditionsFunction>([
      ...BASE_CONDITIONS_MAP,
      ...(customConditions ? customConditions : [])
    ]);

    let conditionResults: (boolean | undefined)[] = [];

    if (this.conditions) {
      Object.keys(this.conditions).forEach(key => {
        // @ts-ignore
        const compare = this.conditions[key];
        const fn = conditionsMap.get(key);
        if (!fn) {
          console.warn(`Condition ${key} does not have a registered evaluation function.`)
        }else{
          if(compare) {
            conditionResults.push(fn(argValue, compare))
          }
        }
      })
    }

    if (this.customConditions) {
      Object.keys(this.customConditions).forEach(key => {
        // @ts-ignore
        const compare = this.customConditions[key];
        const fn = conditionsMap.get(key);
        if (!fn) {
          console.warn(`Condition ${key} does not have a registered evaluation function.`)
        }else{
          if(compare) {
            conditionResults.push(fn(argValue, compare))
          }
        }
      })
    }

    conditionResults = conditionResults.filter(_ => _ !== undefined);
    return conditionResults.includes(true) ? this.check === 'one' : conditionResults.every(_ => _);

  }

}
