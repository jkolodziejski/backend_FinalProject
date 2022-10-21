const jwt = require("jsonwebtoken");
const fs = require('fs');

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
            const key = fs.readFileSync('private.key');
            const token = jwt.sign(
                existsUser[0],
                key,
                {
                  expiresIn: "2h",
                }
            );
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

