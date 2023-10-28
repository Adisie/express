const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blog_schema = new Schema({
    content: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


const Blog = mongoose.model("Blog",blog_schema)

module.exports = Blog