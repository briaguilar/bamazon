DROP DATABASE IF EXISTS customer_viewdb;

CREATE DATABASE customer_viewdb;

USE customer_viewdb;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price INT(10) NULL,
    stock_quantity INT(10) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (1,"iPhone X Phone Case","Cell Phone", 10.00, 20),
    (2,"Airpods","Electronics",150.00, 20),
    (3,"Screw Ring","Jewelry", 20.00, 20),
    (4,"Computer Mouse","Computer Accessories", 15.00, 20),
    (5,"iPhone Headphones","Electronics",30.00, 20),
    (6,"Tactical Backpack","Accessories",60.00, 20),
    (7,"Foam Roller","Accessories",20.00, 10),
    (8,"Blue Light Glasses","Jewelry",10.00, 30),
    (9,"Mouse Pad","Accessories",5.00, 30),
    (10,"Vans","Clothing",40.00, 40);