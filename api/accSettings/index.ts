// Import the express in typescript file
import Express from "express";
import { LoginRequest } from "./LoginRequest";

 
// Initialize the express engine
const app: Express.Application = Express();
 
// Take a port 3000 for running server.
const port: number = 3000;

app.get("/",function (req: Express.Request ,res: Express.Response) {
        res.send('<h1>Hello world</h1>');
    });


// Handling '/' Request
app.post('/login', function (req: LoginRequest<{ username: string, password: string }>, res: Express.Response) {
    const success = req.body.username === "foo"
                    && req.body.password === "bar";
    res.status(200).json({ "Success": success });
});

app.post('/register', function (req: LoginRequest<{ username: string, password: string }>, res: Express.Response) {
    const success = req.body.username === "foo"
                    && req.body.password === "bar";
    res.status(200).json({ "Success": success });
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
