const projectSerializer = (project) => {
  return {
    pk: project.pk,
    user_pk: project.user_pk,
    task_lists_order: project.task_lists_order,
  }
};

const projectListSerializer = (user, projectList) => {
  return {
    project_owner: user,
    project_list: projectList
  }
};

module.exports = {
  projectSerializer,
  projectListSerializer
};