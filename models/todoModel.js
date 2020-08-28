const mongooseConnect = require('../libs/mongoose.js')

let { model, schema } = mongooseConnect.mongooseConnect()

const schemaTodo = new schema({
  name: String,
  id: Number,
  createdAt: String,
  todo: Boolean,
});

module.exports = model('todo', schemaTodo)