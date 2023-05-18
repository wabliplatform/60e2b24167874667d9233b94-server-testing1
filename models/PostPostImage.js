
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostPostImageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { PostPostImageSchema };

