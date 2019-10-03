const { dbPool } = require('../pool');
const {
  SELECT_USER_BY_ID,
} = require('../query/userQuery');

const getUserById = async (id) => {
  const rows = await dbPool.query(SELECT_USER_BY_ID, [id]);
  return (rows[0].length === 0) ? null : rows[0][0]
};

module.exports = {
  getUserById
};