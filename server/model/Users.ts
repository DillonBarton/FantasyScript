import mongoose from "mongoose";
const Schema = mongoose.Schema

/**
 * assert.equal()
 * assert.ok
 * REGEX
 * bcrypt.hash()
 * schema.path('')
 * schema.pre('', function)
 * schema.post('', function)
 */

const root = 'www.amazons3.com'

const regexTest = (re, value) => ( re.test(value) )

const companySchema = new Schema({
    companyName: {
        type: String,
        minlength: [1, '{VALUE} is too short'],
        maxlength: [64, '{VALUE} is too long}'],
        required: true,
        trim: true
    },
    companyEmail: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (email) => {
                const re = /\S+@\S+\.\S+/;
                return regexTest(re, email);
            },
            message: 'Enter a valid email'
        }
    },
    companyNumber: {
        type: Number,
        required: false,
        validate:{
            validator: (v) => {

            },
            message: 'Invalid Number'
        }
    },
    companyLocation: {
        type: Map,
        of: String,
        validate: {
            validator: () => {

            },
            message: ''
        },
        required: [true, 'A Location is required']
    },
    companyIndustry: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});


const userSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        unique: true,
        minlength: [3, '{VALUE} is too short'],
        maxlength: [15, '{VALUE} IS TOO LONG'],
        required: [true, 'username is required']
    },
    profilePicture: {
        type: String,
        required: false,
        get: (urn)=>(`${root}${urn}`)
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    mobileNumber:{
        type: Number,
        trim: true,
        unique: true,
        required: true,
        validate: {
            validator: (n)=>{

            },
            message: ''
        }
    },
    company: {
        type: [companySchema],
        required: false,

    }
}, {timestamps: true})