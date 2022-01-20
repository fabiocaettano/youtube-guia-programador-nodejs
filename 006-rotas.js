const express = require('express')
const app = express()

app.get("/",function(req,res){
    res.send("Hello World!!!")
})

app.get("/sobre",function(req,res){
    res.send("Sobre minha página")
})

app.get("/blog",function(req,res){
    res.send("Bem Vindo ao meu blog")
})

app.get("/ola/:nome/:idade",function(req,res){
    res.send("<h1>Olá "+  req.params.nome +"</h1><h2>Sua idade é "  + req.params.idade + "</h2>")
})

app.listen(8081,function(){
    console.log("Servidor em execução!!")
})