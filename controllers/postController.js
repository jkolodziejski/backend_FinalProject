const User = require('../models/User')

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
            res.send("LOGIN");
        }
        
    }
    else{
        
        console.log("TEST4");
        res.send("User doesn't exists");
    }
   
}

