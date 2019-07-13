var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "customer_viewdb"
});

connection.connect(function (err) {
    if (err) throw err;

    start();
});


function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        
        inquirer
            .prompt([
                {
                    name: "itemId",
                    type: "number",
                    message: "Which product would you like to purchase? (Use Item ID)",
                    choices: console.table(res),
                    validate: function(value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    name: "quantity",
                    type: "number",
                    message: "How many would you like to buy?",
                    validate: function(value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            ])
            .then(function(answer) {
                var chosenId = answer.itemId - 1;
                var chosenProduct = res[chosenId];
                var chosenQuantity = answer.quantity;
                
                if (chosenQuantity < chosenProduct.stock_quantity) {
                    console.log("Your total for " + "(" + answer.quantity + ")" + " - " + chosenProduct.product_name + " is: " + chosenProduct.price.toFixed(2) * chosenQuantity);
                    connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: chosenProduct.stock_quantity - chosenQuantity

                    }, {
                        item_id: res[chosenId].item_id
                    }], function (err,res) {
                        if (err) throw err;
                    })
                } else {
                    console.log("Sorry, insufficient Quantity at this time. All we have is " + res[chosenId].stock_quantity + " in our Inventory.");
                }
            })
    })
}
