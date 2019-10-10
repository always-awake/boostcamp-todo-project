import { Task } from './task'

class TaskList {

  constructor(tasks) {
    this.tasks = tasks;
    this.taskDivList = null;
  }

  init() {
    this.createTaskHTML();
  }

  render() {
    return `
      <div class="taskList">
        <div class="taskListName">${this.tasks[0].taskListTitle}</div>
        ${this.taskDivList}
      </div>`
  }

  createTaskHTML() {
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