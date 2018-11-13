//1 require mongoose
const mongoose = require('mongoose');
// create a new Schema object, included w mongoose.
// can require more standards for our class type. password length, uppercase etc.s
const Schema = mongoose.Schema;
//equaling it to what was just installed 'mongoose'.

//3 make rules about what a cat is.
// const catSchema = { name: String }; basic one with only one requirement. validations, often built in as options.
//only need to do {type: string} if you adding more rules like a default, or minlength. like age, is age: Number; only
const catSchema = new Schema({
      name: {type: String, minlength: 7},
      color: {type: String, default: "Brown"},
      age: Number;

})

//above tells mongoose, every cat class has one key in an object, name and it will always be a string.
//model
//capital letter, creating a class, what mongoose does.
// 3.1 you create the cat class, using those rules.
const Cat = mongoose.model('Cat', catSchema);


module.exports = Cat;