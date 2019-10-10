const projectSerializer = (taskList) => {
  return {
    task_list: taskList
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