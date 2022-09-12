import { Validator } from 'fluentvalidation-ts';
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';

export abstract class AbstractValidator<T> extends Validator<T> {
    constructor() {
        super();
    }

    public isValid(instance: T): Boolean {
        return this.hasValidationErrors(this.validate(instance));
    }

    private hasValidationErrors<T>(validationErrors: ValidationErrors<T>): boolean {
        let values = Object.values(validationErrors);
        return this.checkValidationErrors(values);
    }

    private checkValidationErrors(validationResponse: any[]): boolean {
        if ((validationResponse || []).length) {
            validationResponse.forEach(val => {
                if (typeof val === 'string' || val instanceof String)
                    throw new Error(val as string);
                else if (val === null) {

                } else
                    return this.checkValidationErrors(Object.values(val));
            });
        }
        return true;
    }

    
}