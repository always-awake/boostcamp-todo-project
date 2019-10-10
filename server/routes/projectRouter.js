const express = require('express');
const projectRouter = express.Router();
const {
  projectDetail,
  projectList
} = require('../controllers/projectController');
const {
  isLogin
} = require('../middlewares/auth');

projectRouter.get('', isLogin, projectList);
projectRouter.get('/:projectPk',projectDetail);


module.exports = projectRouter;
