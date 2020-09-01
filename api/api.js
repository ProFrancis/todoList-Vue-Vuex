const express = require('express')
const api = express()
const BodyParser = require('body-parser')
const cors = require('cors')

// PORT SERVE
const PORT = 8000

// MODEL
let todoModel = require('../models/todoModel.js')

// MIDLE
api.use(cors());
api.use(BodyParser.json());
api.use(BodyParser.urlencoded({ extended: true }));

// ROUTES 
api.get('/todo', async (req, res, next) => {
  try{
    const result = await todoModel.find()
    res.json(result).status(200)
  }catch (error){
    next(error)
  }
})

api.get('/todo/:id', async (req, res, next) => {
  try{
    const result = await todoModel.findOne({"id": req.params.id})
    res.json(result).status(200)
  }catch (error){
    next(error)
  }
})

api.post('/todo', async (req, res, next) => {
  try {
    const newTodo = new todoModel(req.body);
    const result = await newTodo.save();
    res.json(result).status(200)
  } catch (error) {
    next(error)
  }
})

api.put('/todo/:id', async (req, res, next) => {
  try{
    const result = await todoModel.findOne({"id": req.params.id})
    const todo = result.todo ? false : !result.todo ? true : "ERROR"
    result.todo = todo
    await result.save()
    res.json(result).status(200)
  }catch(error){
    next(error)
  }
})

api.delete('/todo/:id', async (req, res, next) => {
  try{
    const result = await todoModel.findOne({"id": req.params.id})
    result.isActive = false
    await result.save()
    res.json(result).status(200)
  }catch(error){
    next(error)
  }
})

api.listen(PORT)