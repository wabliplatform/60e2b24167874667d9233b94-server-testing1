
const { PostPostImageSchema } =require('./PostPostImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
Underscoreid:String , 


postImage:  
PostPostImageSchema
 , 


postTitle:String , 


postDesc:String 



})

module.exports = {
  Post : mongoose.model('post', postSchema),
}

