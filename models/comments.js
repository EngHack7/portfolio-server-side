const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    username: {
        required : true,
        type : String
    },

    comments: {
        type : String,
        required : true
    }
},{timestamps : true})

mongoose.model('commentsPorfolio',CommentSchema)