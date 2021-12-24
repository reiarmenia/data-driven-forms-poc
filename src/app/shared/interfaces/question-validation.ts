export interface IQuestionValidation {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}
