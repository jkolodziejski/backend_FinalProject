const User = require('../models/User')
const jwt = require("jsonwebtoken");


exports.createNewUser = async (req, res, next ) => {
    let {login, email, password } = req.body;
    let  user = new User(login, email,password);
    existsUser = await user.checkexsits();
    if ( exit.length  ) {
        res.send("You cannot add user!");
    }
    else{
        user = await  user.save();
        res.send("User added");
    }
   
}

exports.loginUser = async (req, res, next ) => {
    let {login,email, password } = req.body;
    let  user = new User(login, email,password);
    existsUser = await user.checkexsits();
    if ( existsUser.length  ) {
        if(existsUser[0].Password == password){
            console.log(existsUser[0]);
            const token = jwt.sign(
                existsUser[0],
                'private_key',
                {
                  expiresIn: "2h",
                }
            );
            console.log(token);
            res.send(token);
        }
        else{
            res.send("Wrong passwro");
        }
    }
    else{
        
        res.send("User doesn't exists");
    }
   
}

