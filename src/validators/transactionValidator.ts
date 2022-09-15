import { Validator } from "fluentvalidation-ts";
import { ValidationErrors } from "fluentvalidation-ts/dist/ValidationErrors";
import { runInThisContext } from "vm";
import { AccountConditions } from "../models/AccountConditions";
import { TransactionEntry } from '../models/TransactionEntry'

class TransactionValidator extends Validator<AccountConditions> {
    constructor(){
        super();
    }

    public isValid(instance: any): Boolean {
        return this.hasValidationErrors(this.validate(instance))
    }

    private hasValidationErrors(validationErrors: ValidationErrors<any>): boolean {
        let values = Object.values(validationErrors);
        return this.checkValidationErrors(values);
    }

  
    private checkValidationErrors(validationResponse: any[]): any {
        if((validationResponse || []).length){

        }
        return true;
    }
}

