const { dbPool } = require('../pool');
const {
  SELECT_USER_BY_ID,
  INSERT_USER,
} = require('../query/userQuery');

const selectUserById = async (id) => {
  const [rows] = await dbPool.query(SELECT_USER_BY_ID, [id]);
  return (rows.length === 0) ? null : rows[0]
};

const insertUser = async (req) => {
  const { body, file } = req;
  const { id, password, name } = body;
  const profileImgPath = file.path;
  try {
    await dbPool.query(INSERT_USER, [id, password, name, profileImgPath]);
    const [rows] = await dbPool.query(SELECT_USER_BY_ID, [id]);
    return (rows.length === 0) ? null : rows[0]
  } catch (e) {
    console.log('데이터베이스 오류: ', e);
    return null
  }
};

module.exports = {
  selectUserById,
  insertUser
};