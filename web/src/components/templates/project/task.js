const taskHtml = (content, userName) => {
  return `
  <div class="task">${content}</div>
  <div class="taskUser">${userName}</div>
  `
};

export {
  taskHtml
}