import {AbstractControl} from '@angular/forms';
import {Statements} from '../models/statements';
import {ConditionsFunction} from '../types/conditions-function';
import {combineLatest, Observable, tap} from 'rxjs';

export class DynamicFormsUtils {

  public static gatherChangeEvents(
    control: AbstractControl,
    statements: Statements,
    shouldRetain?: boolean,
    customConditions?: Map<string, ConditionsFunction>
  ): Observable<any> | undefined {
    const events: Observable<any>[] = [];
    events.push(statements.getValueChanges(control).pipe(
      tap(() => {

        if(statements.checkStatements(control, customConditions)) {
          if (!shouldRetain) {
            control.reset();
            control.markAsUntouched({onlySelf: false});
            control.markAsPristine({onlySelf: false});
          }
          control.disable({onlySelf: false});
        } else {
           control.enable({onlySelf: false})
        }
        control.updateValueAndValidity({onlySelf: false});
      })
    ));
    return events.length > 0 ? combineLatest([...events]) : undefined;
  }

}
