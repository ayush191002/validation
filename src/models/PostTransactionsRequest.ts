import { TransactionEntry } from "./TransactionEntry";

export interface PostTransactionsRequest {
    transactions: TransactionEntry[];
}