const express = require('express');
const userRouter = express.Router();
const { isAuthenticated } = require('../middlewares/auth.js');
const {
  userLogin,
} = require('../controllers/userController.js');

userRouter.post('/login', userLogin);


module.exports = userRouter;
