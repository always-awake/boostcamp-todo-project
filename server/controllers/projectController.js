const {
  getProjectByPk,
  getProjectList
} = require('../models/orm/projectOrm');
const {
  projectSerializer,
  projectListSerializer
} = require('../utils/serializers/projectSerializers');

/**
 * 프로젝트 상세 페이지 조희 요청을 처리하는 함수
 * @param req
 * @param res
 */
const projectDetail = async (req, res) => {
  const { projectPk } = req.params;
  const response = {};

  const results = await getProjectByPk(projectPk);
  if (results !== null) {
    let taskListPk = null;
    results.forEach((result) => {
      if (taskListPk !== result.taskListPk) {
        taskListPk = result.taskListPk;
        response[taskListPk] = [];
      }
      response[taskListPk].push(result);
    });
  }
  res.status(200);
  res.json(projectSerializer(response));
};

/**
 * 유저가 생성한 프로젝트 목록 조회 요청을 처리하는 함수
 * @param req
 * @param res
 */
const projectList = async (req, res) => {
  const owner = req.user;
  const projectList = await getProjectList(owner.pk);
  (projectList.length !== 0) ? res.status(200) : res.status(204).send();
  res.json(projectListSerializer(owner, projectList));
};

module.exports = {
  projectDetail,
  projectList
};