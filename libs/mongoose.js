const mongoose = require('mongoose')
let MONGOOSE_URL = "mongodb://localhost:27017/todo"

module.exports.mongooseConnect = () => {
  mongoose.connect(MONGOOSE_URL,{   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
  });
  return { 
    model: mongoose.model,
    schema: mongoose.Schema
  }
}