require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')

const dbURI = process.env.DB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => { console.log('connection successful' + res) })
    .catch(err => { console.log(err) })

app.get('/home', (req, res)=>{

})