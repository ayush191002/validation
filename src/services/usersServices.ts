import { mysqlConnection } from "../db/mysqlConnection";
import { PostTransactionsRequest, TransactionEntry } from "../models";
import { postTransactionsRequestValidator } from "../validators/postTransactionsRequestValidator";
import { userValidator } from "../validators/usersValidator";

export class UsersServices {
    public static makeTransactions(req: any, res: any) {
        const data: PostTransactionsRequest = req.body;
        postTransactionsRequestValidator.validate(data);
        
        throw new Error("Method not implemented.");
    }
    public static postData(req: any, res: any) {
        const data = req.body;
        userValidator.validate(data);
        mysqlConnection.query("INSERT INTO test.users SET?", data, (err: Error, results: any, fields: any) => {
            if (err) throw err;
            res.status(200).json(results)
        })
    }

    public static getData(req: any, res: any) {
        // res.send('landing page')
        mysqlConnection.query("SELECT * FROM test.users;", function (error: Error, result: any, fields: any) {
            if (error) throw error
            return res.send(result)
        })
    }
}