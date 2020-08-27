const express = require('express')
const api = express()

const PORT = 8000

api.get('/todo', async (req, res) => {
  res.send().status(200)
})

api.get('/todo:id', async (req, res) => {
  res.send().status(200)
})

api.post('/todo:id', async (req, res) => {
  res.send().status(200)
})

api.put('/todo:id', async (req, res) => {
  res.send().status(200)
})