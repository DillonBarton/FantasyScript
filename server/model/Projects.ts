import mongoose from "mongoose";
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    country: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    companyName: {
        type: String,
        unique: true,
        trim: true
    },
    companyEmail: {
        type: String,
        unique: true,
        trim: true
    }
    }, {timestamps: true});