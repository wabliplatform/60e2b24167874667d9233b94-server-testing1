
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
Underscoreid:String , 


fname:String , 


lname:String , 


cname:String 



})

module.exports = {
  Person : mongoose.model('person', personSchema),
}

