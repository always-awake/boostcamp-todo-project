const { dbPool } = require('../pool');
const {
  SELECT_AUTH
} = require('../query/authQuery');

const selectAuth = async (userPk, projectPk) => {
  const [rows] = await dbPool.execute(SELECT_AUTH, [userPk, projectPk]);
  return (rows.length === 0) ? null : rows[0];
};

module.exports = {
  selectAuth,
};