import { assert } from 'chai';
import { Currency, TransactionEntry } from "../../src/models";
import { postTransactionsRequestValidator } from "../../src/validators/postTransactionsRequestValidator";

describe('test setup', () => {
    it(('throws test'), () => {
        let error = throws(() => { throw new Error("throws test") });
        assert.equal(error.message, "throws test");
    });
})

function throws(func: () => void): Error {
    let error: Error | undefined = undefined;
    try {
        func();
    } catch (e) {
        error = e as Error;
    }
    assert.isNotNull((error || null), 'Actual: error not thrown, Expected: error to be thrown');
    return error as Error;
}


describe('postTransactionsRequestValidator tests', () => {

    it('txn should not be null', () => {
        let data = { transactions: [ null as unknown as TransactionEntry ] };
        let expectedMessage = "transactions[] can't have null elements.";
        let error = throws(() => postTransactionsRequestValidator.isValid(data));
        assert.equal(error.message, expectedMessage);
    });

    it('validator should fail when account conditions are not same for same account', () => {
        let expectedMessage = 'Please check the account conditions in the request.';
        let data = {
            transactions: [
                {
                    accountCode: 'abc',
                    currency: Currency.USD,
                    amount: 123,
                    conditions: {
                        account: {
                            minBalance: [
                                {
                                    currency: Currency.USD,
                                    amount: 100
                                }
                            ]
                        }
                    }
                },
                {
                    accountCode: 'abc',
                    currency: Currency.GBP,
                    amount: 123,
                    conditions: {
                        account: {
                            minBalance: [
                                {
                                    currency: Currency.USD,
                                    amount: 100
                                },
                                {
                                    currency: Currency.GBP,
                                    amount: 100
                                }
                            ]
                        }
                    }
                }
            ]
        }
        let error = throws(() => postTransactionsRequestValidator.isValid(data));
        assert.equal(error.message, expectedMessage);
    })

    it('validator should pass when account conditions are same for same account', () => {

        let data = {
            transactions: [
                {
                    accountCode: 'abc',
                    currency: Currency.USD,
                    amount: 123,
                    conditions: {
                        account: {
                            minBalance: [
                                {
                                    currency: Currency.USD,
                                    amount: 100
                                }
                            ]
                        }
                    }
                },
                {
                    accountCode: 'xyz',
                    currency: Currency.GBP,
                    amount: 123,
                    conditions: {
                        account: {
                            minBalance: [
                                {
                                    currency: Currency.USD,
                                    amount: 100
                                },
                                {
                                    currency: Currency.GBP,
                                    amount: 100
                                }
                            ]
                        }
                    }
                }
            ]
        }
        let response = postTransactionsRequestValidator.isValid(data);
        assert.isTrue(response);
    })
})



