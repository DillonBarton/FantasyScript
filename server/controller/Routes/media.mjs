import express from 'express';
let router = express.Router();
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
import createError from 'http-errors'


// ARRAYS


// CORS whitelist

const mediaWhiteList = ['http://localhost:3000', 'http://127.0.0.1:4500']


// OBJECTS


// CORS options

const corsOptions = {
    origin: (origin, callback) => {
        if( mediaWhiteList.indexOf(origin) !== -1){

            callback(null, true)

        } else {
            callback(new Error(`Invalid ORIGIN`))

        }
    }
}

// Media endpoints object

const mediaRequestsObject = {
    twitter: {
        auth: `${process.env.TWITTER_BEARER_TOKEN}`,
        title: 'twitter',
        endPoints: [
            {
                title: 'twitter profile Data',
                baseUrl: 'https://api.twitter.com',
                pathParams: `/2/users/${process.env.TWITTER_ID}`,
                queryParams: '?user.fields=name,username,description,profile_image_url',
            },
            {
                title: 'twitter post Data',
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
                title: 'facebook data',
                baseUrl: 'https://graph.facebook.com',
                pathParams: '/102963895477102',
                queryParams: `?fields=name,description,about,category,followers_count,link,username,picture{url},posts.limit(1){full_picture,likes.limit(0).summary(true),comments.limit(1).summary(true),created_time,message,message_tags}&access_token=${process.env.PAGE_ACCESS_TOKEN}`,
            }
        ]
    }
}


// FUNCTIONS


// async Wrapper function for footerMedia
const footerMediaLog = (mediaFunction) => {
    return function(req, res, next){

    }
}

// Media information Request

const mediaFunction = async (mediaType, next) => {

        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }

        mediaType.auth ? options.headers['Authorization'] = `Bearer ${mediaType.auth}` : null

        let data = await Promise.allSettled(mediaType.endPoints.map(

            async (obj) => {
                let payLoad = await fetch(`${obj.baseUrl}${obj.pathParams}${obj.queryParams}`, options)
                .then(res => {
                    if(res.status >= 200 && res.status < 300) {
                        return res.json();
                    } else {
                        console.log(res)
                        // return res.json();
                        // {status: res.status, statusText: res.statusText, message: `${mediaType.title} data could not be retrieved`, }
                        // next(createError(res.status, `${mediaType.title} data could not be retrieved`, { cause: res.statusText} ))
                        throw createError(res.status, `${obj.title} data could not be retrieved`, { statusText: res.statusText, date: res.headers.get('Date') } )
                    }
                })
                .catch( err => {
                    console.error(err)
                    return {status: err.status, statusText: err.statusText, message: err.message, date: err.date};
                })
                return payLoad;
            }

        ))
        return data;
    
}

// Twitter

router
    .route('/twitter')
    .get(cors(corsOptions), async (req, res, next)=>{

    let data = await mediaFunction(mediaRequestsObject.twitter, next)
    .then( res => {
        return res.reduce( (acc, obj, cI) => {
            if(obj.value.data){
                if(obj.value.data.id){
                    delete obj.value.data.id
                }
            }
            return {...acc, [`res${cI}`] : obj.value};
        }, {})
    })
    .catch( err => {
        console.error(err)
    })
    data.title = 'TwitterData';
    console.log(data)
    res.send(data);

})
    .post( async (req, res)=>{

})

// Facebook

router
    .route('/facebook')
    .get(cors(corsOptions), async (req, res, next)=>{
        let data = await mediaFunction(mediaRequestsObject.facebook, next)
        .then( res => {
            return res.reduce( (acc, obj, cI) => {
                return {...acc, [`res${cI}`]: obj.value}
            }, {})
        })
        data.title = 'FacebookData'
        console.log(data)
        res.send(data);
    })
    .post( async (req, res)=>{

    })

// Youtube

router
    .route('/youtube')
    .get(cors(corsOptions), async (req, res, next)=>{
        res.send({data: 'youtube'});
    })
    .post(async (req, res, next) =>{

    })


// Instagram

router
    .route('/instagram')
    .get(cors(corsOptions), async (req, res, next) =>{
    res.send({data: 'instagram'});
})
    .post(async (req, res, next) =>{

    })

// Linkedin

router
    .route('/linkedin')
    .get(cors(corsOptions), async (req, res, next) => {
    res.send({data: 'linkedin'});
})
    .post(async (req, res, next) => {

    })


router.use((err, req, res, next) => {
})

export default router