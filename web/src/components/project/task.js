class Task {

  constructor(task) {
    this.task = task;
  }

  render() {
    return `<div class="task">${this.task.taskContent}</div>
    `
  }
}

export {
  Task
}