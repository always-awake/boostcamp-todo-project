const express = require('express');
const taskRouter = express.Router();
const { isAuthenticated } = require('../middlewares/auth');
const {
  createTask
} = require('../controllers/taskController');

taskRouter.post('/', isAuthenticated, createTask);

module.exports = taskRouter;
