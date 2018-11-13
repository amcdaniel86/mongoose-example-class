

//1 require mongoose
const mongoose = require('mongoose');
// create a new Schema object, included w mongoose.
// can require more standards for our class type. password length, uppercase etc.s





// import the cat model from the other file
const Cat = require('./Cat');




const Schema = mongoose.Schema;
//equaling it to what was just installed 'mongoose'.


//2 connect to certain db with mongoose.
mongoose.connect('mongodb://localhost/exampleApp/');
//typically goes in app.js in an express project. this example is in a vacuum so no app.js
// if there is a db called exampleApp, and mongodb compass is opened, they would connect.
//its created automatically, /exampleApp/ when you say add a new cat, it will make the new database called /exampleApp/ and add the cat inside of it.
//exampleApp name of the database

//3 make rules about what a cat is.
// const catSchema = { name: String }; basic one with only one requirement. validations, often built in as options.
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

//one argument, an object. can have as many keys and values as the original catSchema.
// 4 create an actual Cat, (only exists in memory, not saved in db)
const theCat = new Cat({name: "Figaro"})

// // // 5 save the cat you just created.
// theCat.save()
// .then((theThingIGetBackFromDB)=>{
//       console.log(theThingIGetBackFromDB);
// // //successfully resolved promise, thing receiving from db
// // })
// .catch(()=>{
// //rejected promise
// });

// .find will always return an array, if you pass no argument
//it gives you all the cats in the array.

// Cat.find({name: "Pierre"})
//   .then((allTheCats)=> {

//     console.log(allTheCats)
//   })
//   .catch((err)=>{
//       console.log(err);
//   });

  
  //findOne returns an object instead of an arry.
  //it will find the first match and stop after that.
// Cat.findOne({name: "Napoleon"})
//   .then((theSingleCat)=> {

//     console.log(theSingleCat)
//   })
//   .catch((err)=>{
//       console.log(err);
//   });

  
  //usually will have variable set to object id, put variable in Cat.findById(variable). findById - always returns an object, because only 1 possible id in an entire database.
Cat.findById("id number")
  .then((theCatId)=> {

    console.log(theCatId)
  })
  .catch((err)=>{
      console.log(err);
  });

