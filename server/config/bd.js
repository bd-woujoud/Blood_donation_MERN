//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/azza'; 
mongoose.connect(mongoDB,{ useNewUrlParser: true ,useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
