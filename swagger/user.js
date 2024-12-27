const express = require("express")
const swaggerUI= require("swagger-ui-express");
const YAML= require("yamljs")
const swaggerJsDocs= YAML.load('./api1.yaml')
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

app.get("/api/name1",(req, res)=> {res.status(200).send("Sedonsd sidasd")})
