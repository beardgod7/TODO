const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');
const TodoService = require('../service/todoService');
const TodoController = require('../controler/todoController');

const todoServiceInstance = new TodoService(Todo);
const todoControllerInstance = new TodoController(todoServiceInstance);

router.post('/todos', (req, res) => todoControllerInstance.createTodo(req, res));
router.get('/todos', (req, res) => todoControllerInstance.getAllTodos(req, res));
router.get('/todos/:id', (req, res) => todoControllerInstance.getTodoById(req, res));
router.put('/todos/:id', (req, res) => todoControllerInstance.updateTodoById(req, res));
router.delete('/todos/:id', (req, res) => todoControllerInstance.deleteTodoById(req, res));

 
module.exports = router;