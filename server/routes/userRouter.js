const express = require('express');
const userRouter = express.Router();
const { isLogin } = require('../middlewares/auth');
const {
  userLogin,
  userLogout,
  checkIdValidation
} = require('../controllers/userController.js');


userRouter.get('/validation', checkIdValidation);
userRouter.post('/login', userLogin);
userRouter.post('/logout', isLogin, userLogout);

module.exports = userRouter;
