const projectListHtml = (ownerName, projectDivList) => {
  return `
    <div class="projectListTitle">
    <div id="projectOwner">${ownerName}</div>
    님의 프로젝트 목록
    </div>
    <div id="projectList">
    ${projectDivList}
    </div>
    `
};

export {
  projectListHtml,
}