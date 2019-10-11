const projectHtml = (projectName, taskListDivList) => {
  return `
    <div id="projectTitle">${projectName}</div>
    <div id="project">
      ${taskListDivList}
    </div>
    `
};

export {
  projectHtml
}