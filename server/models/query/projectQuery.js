module.exports = {
  SELECT_PROJECT_BY_PK: `  
  SELECT
  tl.pk AS taskListPk, tl.title AS taskListTitle, 
  tl.task_count AS taskCount, t.content AS taskContent, u.name AS userName
  FROM TASK_LISTS tl
    LEFT OUTER JOIN TASKS t ON tl.pk = t.task_list_pk
    LEFT OUTER JOIN USERS u ON u.pk = t.user_pk
  WHERE tl.project_pk = ?;  
  `,
  SELECT_PROJECT_LIST_BY_USER_PK: `
  SELECT user_pk, project_pk, project_name, task_list_count
  FROM
  (SELECT USERS.pk AS user_pk, PROJECTS.pk AS project_pk, PROJECTS.task_list_count AS task_list_count, PROJECTS.name AS project_name
  FROM USERS, PROJECTS
  WHERE USERS.pk = PROJECTS.user_pk)USER_PROJECT
  WHERE user_pk=?;
  `
};
