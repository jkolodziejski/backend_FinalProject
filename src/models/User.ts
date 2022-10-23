import { pool } from "../config/db";

class User{
    login: string;
    email: string;
    password: string;
    constructor(login: string, email: string, password: string){
        this.login = login;
        this.email = email;
        this.password = password;
    }
    
    async save(){
        let sql = `INSERT INTO User (login,email,password) VALUES(  '${this.login}' , '${this.email}' , '${this.password}' );`;

        const [newPost,_] = await pool.execute(sql);

        return newPost;
    }

    async  checkexsits(){
        let sql = `SELECT * FROM User WHERE login = '${this.login}' ;`;

        const [newPost,_] = await pool.execute(sql);

        return newPost;
    }

    static findAll(){
    }
}

module.exports = User;
