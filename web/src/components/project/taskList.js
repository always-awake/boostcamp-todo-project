import { Task } from './Task'
import { taskListHtml } from '../templates/project/taskList';

class TaskList {

  constructor(tasks) {
    this.tasks = tasks;
    this.taskDivList = null;
  }

  init() {
    this.createTaskListHTML();
  }

  render() {
    return taskListHtml(this.tasks[0].taskListTitle, this.taskDivList);
  }

  createTaskListHTML() {
   this.taskDivList = this.tasks.reduce((acc, task) => {
      if (task.taskCount) {
        const taskComponent = new Task(task);
        return acc += taskComponent.render();
      } else {
        return 'Empty';
      }
    }, '');
  }
}

export {
  TaskList
}