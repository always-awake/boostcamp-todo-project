const projectSerializer = (project) => {
  return {
    pk: project.pk,
    user_pk: project.user_pk,
    task_lists_order: project.task_lists_order,
  }
};

module.exports = {
  projectSerializer
};