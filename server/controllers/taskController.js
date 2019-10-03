const {
  insertTask
} = require('../models/orm/taskOrm');
const {
  msgSerializer
} = require('../utils/serializers/commonSerializers');

/**
 * task를 생성하는 함수
 * @param req
 * @param res
 */
const createTask = async (req, res) => {
  const { user, body } = req;
  const { taskListPk, content } = body;
  const insertResult = await insertTask(user.pk, taskListPk, content);

  let status = null;
  let msg = null;
  if (insertResult) {
    status = 200;
    msg = 'task가 성공적으로 생성되었습니다.';
  } else {
    status = 500;
    msg = '일시적 오류입니다. 다시 시도해주세요.';
  }

  res.status(status);
  res.json(msgSerializer(msg));
};

module.exports = {
  createTask
};