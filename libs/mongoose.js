const Mongoose = require('mongoose')
const URL_MONGOOSE = "mongodb://localhost:27017/todo"

connectMongoose = async () => {
  try{
    return await Mongoose.connect(URL_MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true });
  }catch(err){
    console.error(" ERROR MONGO => ", err)
  }
}

exports.connectMongoose = connectMongoose