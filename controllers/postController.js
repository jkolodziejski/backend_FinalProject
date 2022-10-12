const User = require('../models/User')

exports.createNewUser = async (req, res, next ) => {
    let {login, email, password } = req.body;
    let  user = new User(login, email,password);
    user = await  user.save();
    console.log(user);
    res.send("User added");
}

exports.getAllUsers = async (req , res, next) => {
    res.send("TEST");
}

exports.getPostById = async (req , res, next) => {
    res.send("TESTś");
}