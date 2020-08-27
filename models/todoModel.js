const { connectMongoose } = require('../libs/mongoose.js')
const Mongoose = connectMongoose()

const ToDoModel = Mongoose.model("todo", {
  name: String,
  id: Number,
  createdAt: String,
  todo: Boolean,
});

exports.ToDoModel = ToDoModel