// npm i nodemon swagger-ui-express express yamljs express

const express = require("express")
const swaggerUI= require("swagger-ui-express");
const YAML= require("yamljs")
const swaggerJsDocs= YAML.load('./api.yaml')
const fileupload=require("express-fileupload")

const app = express()
app.use(express.json())
app.use(fileupload())


let users =[
    {id:1, name:"Tayyab"},
    {id:2, name:"Hammad"},
    {id:3, name:"ali"}
]

app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.get("/api/name",(req, res)=> {res.status(200).send("This is string messag")})

app.get("/api/user",(req, res)=> {
    return res.status(200).json({id:1, name:"Tayyab"})
})

app.get("/api/userlist",(req, res)=>{
    return res.status(200).json(users);
})

app.get("/api/user/:id",(req, res)=>{
    let obg = users.find(s=> s.id === parseInt(req.params.id))
    if(!obg)
    {
        return res.status(404).json("User Not found")
    }
    else
    {
        return res.status(200).json(obg)
    }
})

app.get("/api/userQuery",(req, res)=>{
    console.warn(req.query.id)
    let obg = users.find(s=> s.id === parseInt(req.query.id))
    if(!obg)
    {
        return res.status(404).json("User Not found")
    }
    else
    {
        return res.status(200).json(obg)
    }
})

app.post("/api/user",(req, res)=>{
    let newUser={
        id: req.body.id,
        name: req.body.name
    }
    users= [...users, newUser];

    return res.status(201).json(newUser)
})

app.post("/api/fileupload",(req, res)=>{
    const file= req.files.file
    let path =__dirname+"/upload/"+Date.now()+".jpg"
    file.mv(path,(err)=>{
        res.send("OK");
    });
})

app.listen(4000,()=> console.log("Up & Running the Server"))