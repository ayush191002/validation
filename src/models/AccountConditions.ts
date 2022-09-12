import { Currency } from ".";

export interface AmountWithCurrency {
    currency: Currency,
    amount: number
}

export interface AccountConditions {
    minBalance: AmountWithCurrency[];   //Required minimum balances per currency
}