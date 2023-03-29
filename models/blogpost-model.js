const mongoose = require('mongoose')

const BlogpostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: [mongoose.Types.ObjectId],
        ref: 'user'
    }
})

module.exports = mongoose.model('blogpost', BlogpostSchema)