const path = require("path")  const express = require('express')  

const app = express()  

app.use(express.static("public"))  

app.listen(3030,() => console.log('Servidor corriendo en el puerto 3030')) 

app.get('/', (req, res) => {          
    console.log(__dirname);     
    res.sendFile(path.resolve(__dirname, "./views/index.html"))  
})  

app.get('/babbage', (req, res) => {          
    console.log(__dirname);     
    res.sendFile(path.resolve(__dirname, "./views/babbage.html"))  
})  

app.get('/clarke', (req, res) => {          
    console.log(__dirname);     
    res.sendFile(path.resolve(__dirname, "./views/clarke.html"))  
})