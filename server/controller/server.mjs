import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
const app = express();
import mongoose from 'mongoose';
import next from 'next';
import fetch from 'node-fetch'


// Connect to database

const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {app.listen(4500); console.log("listening")})
    .catch(err => console.log(err))

// Middleware


// Converstion of Incomming JSON STRINGS
app.use(express.json())

// convert POST requests and arrays to JSON
app.use(express.urlencoded({ extended: true }))


// OBJECTS


// Media objects

const mediaArr = {
    twitter: {
        auth: `${process.env.TWITTER_BEARER_TOKEN}`,
        title: 'twitter',
        endPoints: [
            {
                baseUrl: 'https://api.twitter.com',
                pathParams: `/2/users/${process.env.TWITTER_ID}`,
                queryParams: '?expansions=pinned_tweet_id&user.fields=name,username,description,profile_image_url,created_at',
            },
            {
                baseUrl: 'https://api.twitter.com/2',
                pathParams: `/users/${process.env.TWITTER_ID}/tweets`,
                queryParams: '?tweet.fields=attachments,created_at',
            }
        ]
    },
    facebook: {
        auth: `${process.env.FACEBOOK_BEARER_TOKEN}`,
        title: 'facebook',
        endPoints: [
            {
                baseUrl: 'https://graph.facebook.com',
                pathParams: '/102963895477102_103008712139287',
                queryParams: '',
            },
            // {
            //     title,
            //     baseUrl,
            //     pathParams,
            //     queryParams,
            //     aith
            // }
        ]
    }
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
        let data = await Promise.all(mediaType.endPoints.map(

            async (obj) => {

                let payLoad = await fetch(`${obj.baseUrl}${obj.pathParams}${obj.queryParams}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${mediaType.auth}`
                    }
                })
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



app.get('/:mediaType', async (req, res, next)=>{

    if(mediaArr[req.params.mediaType]){

        let data = await mediaFunction(mediaArr[req.params.mediaType], next)
        res.send(data);

    } else {
        
        res.send(new Error('Invalid media type'))

    }
    
})
    .post('/', (req, res)=>{

})