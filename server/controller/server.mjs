import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
import media from './Routes/media.mjs';


// ARRAYS


// Media origins

const whiteList = ['http://localhost:3000', 'http://127.0.0.1:4500']


// OBJECTS


// CORS options

const corsOptions = {
    origin: (origin, callback) => {
        if( whiteList.indexOf(origin) !== -1){

            callback(null, true)

        } else {
            
            callback(new Error('Invalid ORIGIN'))

        }
    },
    credentials: true
}


// Establishing database connection

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {console.log('CONNECTED TO THE DATABASE')})
    .catch(err => console.log(err))


// Middleware


// Converstion of Incomming JSON STRINGS
app.use(express.json())

// convert POST requests and arrays to JSON
app.use(express.urlencoded({ extended: true }))

// Media Endpoints
app.use('/media', media)

app.listen(process.env.PORT || 4500, err => err ? console.log(`Error: ${err}`): null);