import { Currency, TransactionConditions } from ".";

export interface TransactionEntry {
    accountCode: string;  //Account Identifier
    currency: Currency;  //Transaction Currency
    amount: number;  //Transaction Amount
    sequenceNumber: number; //Sequence in which this transaction should be recorded

    conditions: TransactionConditions;  //Conditions
}