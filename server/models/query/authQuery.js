module.exports = {
  SELECT_AUTH: `SELECT auth FROM USERS_has_PROJECTS WHERE user_pk=? AND project_pk=?;`,
};
