const express = require('express')
const api = express()
const BodyParser = require('body-parser')

// PORT SERVE
const PORT = 8000

// MODEL
let todo = require('../models/todoModel.js')


// MIDLE
api.use(BodyParser.json());
api.use(BodyParser.urlencoded({ extended: true }));

// ROUTES 
api.get('/todo', async (req, res, next) => {
  try{
    const result = await todo.find()
    res.json(result).status(200)
  }catch (err){
    next(err)
  }
})

api.get('/todo:id', async (req, res) => {
  res.send().status(200)
})

api.post('/todo:id', async (req, res, next) => {
  try {
    console.log("IN POST => ", result)
    const todo = new todo(req.body);
    const result = await todo.save();
    console.log("IN GET => ", result)
    res.json(result);
  } catch (error) {
    next(error)
  }
})

api.put('/todo:id', async (req, res) => {
  res.send().status(200)
})

api.listen(PORT)