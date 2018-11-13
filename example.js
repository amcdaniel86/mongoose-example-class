


const mongoose = require('mongoose');
//equaling it to what was just installed 'mongoose'.



mongoose.connect('mongodb://localhost/exampleApp/');
//typically goes in app.js in an express project. this example is in a vacuum so no app.js
// if there is a db called exampleApp, and mongodb compass is opened, they would connect.
//its created automatically, /exampleApp/ when you say add a new cat, it will make the new database called /exampleApp/ and add the cat inside of it.




