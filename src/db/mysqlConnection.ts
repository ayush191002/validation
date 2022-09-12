const mysql = require('mysql2');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    insecureAuth: true
})

con.connect(function (err: Error) {
    if (err) throw err;
    console.log("Connected!");
});

export const mysqlConnection = con;