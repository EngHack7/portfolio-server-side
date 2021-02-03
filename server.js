const express = require('express');
const http = require('http');
const app = express()
const port = 5e3;
const cors = require('cors');
const mongoose = require('mongoose')
const {MONGODBURL} = require('./keys')
const body_parser = require('body-parser')


mongoose.connect(MONGODBURL ,{useNewUrlParser:true , useNewUrlParser : true, useUnifiedTopology: true}, (err) => {
    err ? console.log("connection error" + err) : console.log("connected with mongo ");    
  } )
app.use(body_parser())
app.use(cors())


require('./models/comments')


//router
app.use(require('./router/commentsPorfolio'))


app.get('/',(req,res) => {
    res.send("work in server.js" )
})


app.listen(process.env.PORT || port, () =>{
    console.log("server has started");
})