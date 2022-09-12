import { UsersServices } from "../services/usersServices"

const express = require('express');

export class Router {
    public app: any;
    constructor() {
        this.app = express()
        this.app.use(express.json())

        this.app.get('/', UsersServices.getData)
        this.app.post('/', UsersServices.postData)
        this.app.post('/txn', UsersServices.makeTransactions)
    }
}