const { dbPool } = require('../pool');
const {
  SELECT_PROJECT_BY_PK,
} = require('../query/projectQuery');

const getProjectByPk = async (pk) => {
  const rows = await dbPool.query(SELECT_PROJECT_BY_PK, [pk]);
  return (rows[0].length === 0) ? null : rows[0][0]
};

module.exports = {
  getProjectByPk
};