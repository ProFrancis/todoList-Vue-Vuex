const mongooseConnect = require('../libs/mongoose.js')

let { model, schema } = mongooseConnect.mongooseConnect()

const requiredString = {
  type : String, 
  required: true,
};

const requiredNumber = {
  type: Number, 
  required: true
}

const defaultDate = {
  type: Date,
  default: Date.now,
  required: true
}

const schemaTodo = new schema({
  name: requiredString,
  id: requiredNumber,
  created_at: defaultDate,
});

module.exports = model('todo', schemaTodo)