const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: { type: String, required: true },
    images: { type: [String], required: false },
    caption: { type: [String], required: false },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    imagNum: { type: Number, required: false },
    AdminImg: { type: String, required: true },
    likes: { type: Number, default: 0 }, // New field to store like count
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
