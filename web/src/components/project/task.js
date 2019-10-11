import { taskHtml } from '../templates/project/task';

class Task {

  constructor(task) {
    this.task = task;
  }

  render() {
    return taskHtml(this.task.taskContent, this.task.userName);
  }
}

export {
  Task
}