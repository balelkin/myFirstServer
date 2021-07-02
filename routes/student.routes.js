const express = require('express')
const students = require('../controllers/student.controller');
const route = express.Router()

route.get('/', students.list)

route.get('/:id', students.findById)
route.delete('/:id', students.delete)
route.post('/', students.create)
route.patch('/:id', students.update)
module.exports = route;