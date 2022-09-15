import { Validator } from "fluentvalidation-ts";
import { AccountConditions } from "../models/AccountConditions";
import { TransactionEntry } from '../models/TransactionEntry'

class TransactionValidator extends Validator<AccountConditions>{
    constructor(){
        super();
        
    }
}

