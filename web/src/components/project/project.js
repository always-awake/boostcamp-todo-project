import { projectHtml } from '../templates/project/project'
import { TaskList } from '../project/TaskList';
import { $ } from '../../utils/utils';

class Project {

  constructor(projectName, insertionTagId) {
    this.projectName = projectName;
    this.insertionTagId = insertionTagId;
    this.taskListDivList = null;
  }

  init(projectData) {
    this.createTaskListHTML(projectData);
    this.render();
  }

  render() {
    const insertionSection = $(`main#${this.insertionTagId}`);
    insertionSection.innerHTML = projectHtml(this.projectName, this.taskListDivList)
  }

  createTaskListHTML(projectData) {
    this.taskListDivList = Object.keys(projectData.task_list).reduce((acc, key ) => {
      const tasks = projectData.task_list[key];
      const taskList = new TaskList(tasks);
      taskList.init();
      return acc += taskList.render();
    }, '');
  }
}

export {
  Project
}