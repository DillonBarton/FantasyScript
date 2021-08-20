require('dotenv').config()
const express = require('express')
const app = express();
import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => { console.log('connection successful' + res) })
    .catch(err => { console.log(err) })

app.get('/', (req, res)=>{

})
    .post('/', (req, res)=>{

})