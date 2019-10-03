const express = require('express');
const taskRouter = express.Router();
const {
  isLogin,
  isOwner
} = require('../middlewares/auth');
const {
  createTask
} = require('../controllers/taskController');


taskRouter.post('/', isLogin, isOwner, createTask);
taskRouter.put('/:taskPk', isLogin, isOwner,)


module.exports = taskRouter;
