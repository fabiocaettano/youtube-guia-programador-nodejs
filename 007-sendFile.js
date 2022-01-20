const { application } = require("express")
const express = require("express")

var app = express()

console.log(__dirname)

app.get("/",function(req,res){
    res.sendFile(__dirname+"/html/index.html")
})

app.listen(8080,function(){
    console.log("Servidor Executando")
})