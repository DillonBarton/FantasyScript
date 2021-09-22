import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express();
import mongoose from 'mongoose';
import next from 'next';
import fetch from 'node-fetch'


// Connect to database

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {app.listen(4500); console.log('listening')})
    .catch(err => console.log(err))

// Middleware


// Converstion of Incomming JSON STRINGS
app.use(express.json())

// convert POST requests and arrays to JSON
app.use(express.urlencoded({ extended: true }))


// CLASSES


class Option{

}


// OBJECTS


// Media objects

const mediaRequestsObject = {
    twitter: {
        auth: `${process.env.TWITTER_BEARER_TOKEN}`,
        title: 'twitter',
        endPoints: [
            {
                baseUrl: 'https://api.twitter.com',
                pathParams: `/2/users/${process.env.TWITTER_ID}`,
                queryParams: '?user.fields=name,username,description,profile_image_url',
            },
            {
                baseUrl: 'https://api.twitter.com/2',
                pathParams: `/users/${process.env.TWITTER_ID}/tweets`,
                queryParams: '?tweet.fields=attachments,created_at,public_metrics&max_results=5',
            }
        ]
    },
    facebook: {
        auth: null,
        title: 'facebook',
        endPoints: [
            {
                baseUrl: 'https://graph.facebook.com',
                pathParams: '/102963895477102',
                queryParams: `?fields=name,description,about,category,followers_count,link,username,picture{url},posts.limit(1){full_picture,likes.limit(0).summary(true),comments.limit(1).summary(true),created_time,message,message_tags}&access_token=${process.env.PAGE_ACCESS_TOKEN}`,
            }
        ]
    }
}

const mediaResponseObject = {

}

// FUNCTIONS


// async Wrapper function for footerMedia
const footerMediaLog = (mediaFunction) => {
    return function(req, res, next){

    }
}

// Media information function

const mediaFunction = async (mediaType, next) => {
    try{
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }

        mediaType.auth ? options.headers['Authorization'] = `Bearer ${mediaType.auth}` : null

        let data = await Promise.all(mediaType.endPoints.map(

            async (obj) => {
                let payLoad = await fetch(`${obj.baseUrl}${obj.pathParams}${obj.queryParams}`, options)
                .then(res => res.json())
                .catch(err => err)

                return payLoad;
            }

        ))

        return data;
    }
    catch(err){

        return next(err);

    }

        
    
    
}



app.get('/twitter', async (req, res, next)=>{

    let data = await mediaFunction(mediaRequestsObject.twitter, next)

    for (let i = 0; i < data.length; i++) {

        mediaResponseObject[`res${i}`] = data[i]

        switch (i) {

            case 0:
                delete mediaResponseObject[`res${i}`].data.id;
                break;

        }

    }

    res.send(mediaResponseObject);

})
    .post('/', (req, res)=>{

})

app.get('/facebook', async (req, res, next)=>{
    let data = await mediaFunction(mediaRequestsObject.facebook, next)
    res.send(data);
})
    .post('/', (req, res)=>{

})
