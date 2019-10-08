const express = require('express');
const userRouter = express.Router();
const multer = require('multer');
const { multerConfig } = require('../lib/multer');
const upload = multer(multerConfig(multer));
const { isLogin } = require('../middlewares/auth');
const {
  userLogin,
  userLogout,
  checkIdValidation,
  userSignUp,
  checkSession
} = require('../controllers/userController.js');


userRouter.get('/validation', checkIdValidation);
userRouter.post('/login', userLogin);
userRouter.get('/login', checkSession);
userRouter.post('/logout', isLogin, userLogout);
userRouter.post('/accounts', upload.single('uploadImg'), userSignUp);


module.exports = userRouter;
