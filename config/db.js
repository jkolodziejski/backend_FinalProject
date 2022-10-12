require('dotenv').config();
const mysql = require("mysql2");


const pool = mysql.createPool({
    host : process.env.DATABASE_URL,
    user : process.env.DATABASE_LOGIN,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
});

module.exports = pool.promise();

let sql_create = "CREATE TABLE User (Login varchar(255),Email varchar(255),Password varchar(255)); ";
let sql_inser = "INSERT INTO Persons (personid, lastname, firstname, address, city) VALUES( 1, 'test', 'test', 'test', 'test');";

/*
pool.query(sql_create, function(err, result){
    if (err) throw err;
    console.log(result);
});
*/
module.exports = pool.promise();