const { PROJECT_LIST_URL } = require('../../utils/URL');
const { ProjectView } = require('../../views/project');

class ProjectList {
  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
    this.projectList = {};
    this.projectOwner = null;
  }

  init() {
    this.requestProjectList();
  }

  render(projectDiv) {
    const insertionSection = document.querySelector(`main#${this.insertionTagId}`);
    insertionSection.innerHTML = `
    <div class="projectListTitle">
    <div id="projectOwner">${this.projectOwner.name}</div>
    님의 프로젝트 리스트
    </div>
    <div id="projectList">
    ${projectDiv}
    </div>
    `
  }

  addEvent() {
    const insertionSection = document.querySelector(`main#${this.insertionTagId}`);
    const projectList = insertionSection.querySelector('#projectList');
    projectList.addEventListener('click', (e) => {
      const projectName = e.target.innerText;
      const selectedProjectPk = this.projectList[projectName];
      const projectView = new ProjectView(selectedProjectPk, projectName, 'main');
      projectView.render();
    })
  }

  requestProjectList() {
    fetch(PROJECT_LIST_URL, {
      method: 'GET',
      credentials: 'include'
    })
        .then((res) => res.json())
        .then((res) => {
          const { project_list, project_owner } = res;

          project_list.forEach((project) => {
            this.projectList[project.project_name] = project.project_pk;
          });
          this.projectOwner = project_owner;
          this.createProjectDivList();
        })
        .catch(err => console.error('Error: ', err));
  }

  createProjectDivList() {
    let projectDivList = '';
    Object.keys(this.projectList).forEach((project) => {
      projectDivList += `
      <div class="project">${project}</div>\n
      `
    });
    this.render(projectDivList);
    this.addEvent();
  }
}

export {
  ProjectList
}