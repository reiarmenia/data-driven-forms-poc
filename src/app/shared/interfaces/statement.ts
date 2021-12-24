export interface IStatement {

  arg: {
    sibling: string;
    type: 'string' | 'number' | 'boolean' | 'date';
  };

  meetsCondition?: {
    hasValue?: boolean;
    isValid?: boolean;
    matches?: any;
    isLessThan?: number;
    isGreaterThan?: number;
    isEqualTo?: number;
    isLessOrEqual?: number;
    isGreaterOrEqual: number;
    isTruthy?: boolean;
    isFalsy?: boolean;
    isDate?: boolean;
    isDateBefore?: Date;
    isDateAfter?: Date;
    isOnOrBefore?: Date;
    isOnOrAfter?: Date;
    isAgeGreater?: number;
    isAgeLess?: number;
    isAge?: number;
    eval?: string;
  }

}
