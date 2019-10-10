const {
  getProjectByPk,
  getProjectList
} = require('../models/orm/projectOrm');
const {
  projectSerializer,
  projectListSerializer
} = require('../utils/serializers/projectSerializers');

const projectDetail = async (req, res) => {
  const { projectPk } = req.params;
  const project = await getProjectByPk(projectPk);
  if (project.is_public) {
    res.status(200);
    res.json(projectSerializer(project));
  }
};

const projectList = async (req, res) => {
  const owner = req.user;
  const projectList = await getProjectList(owner.pk);
  (projectList.length !== 0) ? res.status(200):res.status(204).send();
  res.json(projectListSerializer(owner, projectList));
};

module.exports = {
  projectDetail,
  projectList
};