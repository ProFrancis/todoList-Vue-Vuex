const mongoose = require('mongoose')
let MONGOOSE_URL = "mongodb://localhost:27017/todo"
let database;

module.exports.mongooseConnect =  () => {
  mongoose.connect(MONGOOSE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
  return { 
    model: mongoose.model,
    schema: mongoose.Schema
  }
}