import Express from "express";


const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({extended: true}))



app.get("/", (req,res) => {
    res.send('<h1> Hello word</h1>');
})


app.post("/add" , (req,res)=>{
    console.log(req.body.username)
    console.log(req.body.password)
    res.send(200);
})

app.listen(port , ()=> console.log("listening on port"+ port))
