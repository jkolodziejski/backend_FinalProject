const db = require('../config/db')

class User{
    constructor(login, email, passowrd){
        this.login = login;
        this.email = email;
        this.passowrd = passowrd;

    }
    
    async save(){
        let sql = 'INSERT INTO Users(user,email,pasword) VALUES( ${this.login} , ${this.email}, ${his.password} )';

        const [newPost,_] = await db.execute(sql);

        return newPost;
    }


    static findAll(){
    }
}

module.exports = User;
