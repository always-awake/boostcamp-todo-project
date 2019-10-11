const taskListHtml = (title, taskDivList) => {
  return `
  <div class="taskList">
    <div class="taskListName">${title}</div>
    ${taskDivList}
  </div>`
};

export {
  taskListHtml
}