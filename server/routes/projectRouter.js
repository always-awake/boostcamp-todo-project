const express = require('express');
const projectRouter = express.Router();
const {
  projectDetail,
  projectList
} = require('../controllers/projectController');
const {
  isLogin,
  isReadable
} = require('../middlewares/auth');

projectRouter.get('', isLogin, projectList);
projectRouter.get('/:projectPk', isLogin, isReadable, projectDetail);


module.exports = projectRouter;
