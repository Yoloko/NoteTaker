// express to create web application 

const express =require('express')

// path to connect the file 
const path = require('path')


// require fs 

const fs = require ('fs')

const port = 6000;
const __dirname = path.resolve() 

const PORT = process.env.PORT || 8000;


// body perser allows to receive data back in js format 
app.use(bodyParser.urlencoded({ extended: true}));
 
// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));


//router 

app.get('/notes',function (req,res){
    res.sendFile('notes.html',{root: path.join(__dirname,'./public')});
})