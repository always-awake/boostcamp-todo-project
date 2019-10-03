const { dbPool } = require('../pool');
const {
  SELECT_TASK_BY_ID,
  GET_TASK_COUNT,
  INSERT_TASK,
  UPDATE_TASK
} = require('../query/taskQuery');

/**
 * task 데이터를 조회(Select)하는 함수
 * @param pk
 * @returns {Promise<null>}
 */
const selectTaskByPk = async (pk) => {
  const [rows] = await dbPool.query(SELECT_TASK_BY_ID, [pk]);
  return (rows.length === 0) ? null : rows[0]
};

/**
 * task 데이터를 삽입(Insert)하는 함수
 * @param userPk
 * @param taskListPk
 * @param content
 * @returns {Promise<boolean>}
 */
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

/**
 * task 데이터를 삽입(Update)하는 함수
 * @param taskPk
 * @param content
 * @returns {Promise<boolean>}
 */
const updateTask = async (taskPk, content) => {
  try {
    await dbPool.query(UPDATE_TASK, [content, taskPk]);
    return true
  } catch(e){
    console.log('데이터 베이스 오류: ', e);
    return false
  }
};

module.exports = {
  selectTaskByPk,
  insertTask,
  updateTask,
};