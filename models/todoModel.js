const mongooseConnect = require('../config/mongoose.js')

let { model, schema } = mongooseConnect.mongooseConnect()

const requiredString = {
  type : String, 
  required: true,
};

const requiredNumber = {
  type: Number, 
  required: true
}

const requiredBoolean ={
  type: Boolean,
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
  todo: requiredBoolean,
  isActive: requiredBoolean,
  createdAt: requiredString,
  created_at: defaultDate,
});

module.exports = model('todoModel', schemaTodo)