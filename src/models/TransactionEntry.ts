import { TransactionConditions, Currency } from ".";

export interface TransactionEntry {
    accountCode: string;  //Account Identifier
    currency: Currency;  //Transaction Currency
    amount: number;  //Transaction Amount

    conditions: TransactionConditions;  //Conditions
}