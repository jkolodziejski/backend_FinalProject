const db = require('../config/db')

class User{
    constructor(login, email, passowrd){
        this.login = login;
        this.email = email;
        this.passowrd = passowrd;

    }
    
    async save(){
        let sql = `INSERT INTO User (login,email,password) VALUES(  '${this.login}' , '${this.email}' , '${this.password}' );`;

        const [newPost,_] = await db.execute(sql);

        return newPost;
    }


    static findAll(){
    }
}

module.exports = User;
