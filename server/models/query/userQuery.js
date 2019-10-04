module.exports = {
  SELECT_USER_BY_ID: `SELECT pk, id, name, password, is_superuser FROM USERS WHERE id=?;`,
  INSERT_USER: `
  INSERT INTO USERS(id, password, name, profile_img)
  VALUES(
    ?,
    ?,
    ?,
    ?
  );`
};