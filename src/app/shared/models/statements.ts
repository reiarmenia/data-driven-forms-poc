import {IStatements} from '../interfaces/statments';
import {Statement} from './statement';
import {AbstractControl} from '@angular/forms';
import {combineLatest} from 'rxjs';
import {ConditionsFunction} from '../types/conditions-function';

export class Statements implements IStatements {
  public check?: "one" | "all";
  public statements: Statement[];

  constructor(statements: IStatements) {
    this.check = statements.check;
    this.statements = statements.statements.map(_ => new Statement(_))
  }

  public getControls(control: AbstractControl): (AbstractControl | null)[] {
    return this.statements.map(_ => _.getArgControl(control))
  }

  public getValueChanges(control: AbstractControl) {
    return combineLatest([...(this.getControls(control).filter(_ => _ !== null).map(_ => _?.valueChanges))])
  }

  public checkStatements(control: AbstractControl, customConditions?: Map<string, ConditionsFunction>) {
    const statementChecks = this.statements.map(statement => {
      const statementControl = statement.getArgControl(control);
      const statementValue = statementControl ? statementControl.value : null;
      return statement.checkStatement(statementValue, customConditions);
    });

    return statementChecks.includes(true) ? this.check === 'one' : statementChecks.every(_ => _);

  }


}
