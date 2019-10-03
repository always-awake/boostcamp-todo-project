module.exports = {
  SELECT_TASK_BY_ID: `SELECT pk, user_pk, task_list_pk, content, created_at, updated_at FROM TASKS WHERE pk=?;`,
  GET_TASK_COUNT: `SELECT task_count FROM TASK_LISTS WHERE pk=?;`,
  INSERT_TASK: `
  INSERT INTO TASKS(user_pk, task_list_pk, content, seq)
  VALUES(
    (SELECT pk FROM USERS WHERE pk = ?),
    (SELECT pk FROM TASK_LISTS WHERE pk = ?),
    ?,
    ?,,
  );
  UPDATE TASK_LISTS SET task_count = task_count + 1 WHERE pk = ?;`,
};
