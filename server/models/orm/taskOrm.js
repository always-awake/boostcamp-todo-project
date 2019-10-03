const { dbPool } = require('../pool');
const {
  SELECT_TASK_BY_ID,
  GET_TASK_COUNT,
  INSERT_TASK,
} = require('../query/taskQuery');

const selectTaskByPk = async (pk) => {
  const rows = await dbPool.query(SELECT_TASK_BY_ID, [pk]);
  return (rows[0].length === 0) ? null : rows[0][0]
};

const insertTask = async (userPk, taskListPk, content) => {
  const [rows] = await dbPool.query(GET_TASK_COUNT, [taskListPk]);
  const taskSeq = rows[0]['task_count'] + 1;
  try {
    await dbPool.query(INSERT_TASK, [userPk, taskListPk, content, taskSeq, taskListPk]);
    return true
  } catch (e) {
    console.log('데이터 베이스 오류: ', e);
    return false
  }

};

module.exports = {
  selectTaskByPk,
  insertTask,
};