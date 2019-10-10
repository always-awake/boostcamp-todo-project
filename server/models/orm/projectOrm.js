const { dbPool } = require('../pool');
const {
  SELECT_PROJECT_BY_PK,
  SELECT_PROJECT_LIST_BY_USER_PK,
} = require('../query/projectQuery');

const getProjectByPk = async (pk) => {
  const [rows] = await dbPool.query(SELECT_PROJECT_BY_PK, [pk]);
  return (rows.length === 0) ? null : rows[0]
};

const getProjectList = async (userPk) => {
  const [rows] = await dbPool.query(SELECT_PROJECT_LIST_BY_USER_PK, [userPk]);
  return rows
};

module.exports = {
  getProjectByPk,
  getProjectList
};