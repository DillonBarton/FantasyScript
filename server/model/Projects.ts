import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema({
    firstName: {
        type: String,
        required: true
    }
});