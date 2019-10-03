const express = require('express');
const taskRouter = express.Router();
const {
  isLogin,
  isOwner
} = require('../middlewares/auth');
const {
  createTask,
  modifyTask,
  removeTask
} = require('../controllers/taskController');


taskRouter.post('/', isLogin, isOwner, createTask);
taskRouter.put('/:taskPk', isLogin, isOwner, modifyTask);
taskRouter.delete('/:taskPk', isLogin, isOwner, removeTask);


module.exports = taskRouter;
