const{Client} = require('pg');

const client = new Client({
    host : "localhost",
    user : "user",
    password : "example",
    port : 5432,
    database : "test"
})

client.connect();

client.query("CREATE TABLE Persons (PersonID int, LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255) ); ", (err, res)=>{
    if(!err){
        console.log(res.row);
    }
    else{
        console.log(err.message);
    }
  
})

client.query("INSERT INTO persons (personid, lastname, firstname, address, city) VALUES( 1, 'test', 'test', 'test', 'test');", (err, res)=>{
    if(!err){
        console.log(res.row);
    }
    else{
        console.log(err.message);
    }

})


client.query("SELECT * FROM persons ;", (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
  client.end;
})

