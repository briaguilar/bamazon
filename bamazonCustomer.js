var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "customer_viewdb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        console.table(result);
    });
});
