const db = require('../config/db')

class User{
    constructor(login, email, password){
        this.login = login;
        this.email = email;
        this.password = password;

    }
    
    async save(){
        let sql = `INSERT INTO User (login,email,password) VALUES(  '${this.login}' , '${this.email}' , '${this.password}' );`;

        const [newPost,_] = await db.execute(sql);

        return newPost;
    }

    async  checkexsits(){
        let sql = `SELECT * FROM User WHERE login = '${this.login}' ;`;

        const [newPost,_] = await db.execute(sql);

        return newPost;
    }


    static findAll(){
    }
}

module.exports = User;
