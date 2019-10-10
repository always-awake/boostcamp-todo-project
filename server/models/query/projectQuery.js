module.exports = {
  SELECT_PROJECT_BY_PK: `SELECT pk, is_public, user_pk, task_lists_order FROM PROJECTS WHERE pk=?;`,
  SELECT_PROJECT_LIST_BY_USER_PK: `
  SELECT user_pk, project_pk, project_name, task_list_count
  FROM
  (SELECT USERS.pk AS user_pk, PROJECTS.pk AS project_pk, PROJECTS.task_list_count AS task_list_count, PROJECTS.name AS project_name
  FROM USERS, PROJECTS
  WHERE USERS.pk = PROJECTS.user_pk)USER_PROJECT
  WHERE user_pk=?;
  `
};
