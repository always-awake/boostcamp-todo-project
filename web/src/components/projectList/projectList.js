const { PROJECT_LIST_URL } = require('../../utils/URL');
const { ProjectView } = require('../../views/project');
const { $ } = require('../../utils/utils');

class ProjectList {

  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
    this.projectList = {};
    this.projectOwner = null;
    this.projectDivList = null;
  }

  init() {
    this.getProjectList();
  }

  render() {
    const insertionSection = $(`main#${this.insertionTagId}`);
    insertionSection.innerHTML = `
    <div class="projectListTitle">
    <div id="projectOwner">${this.projectOwner.name}</div>
    님의 프로젝트 목록
    </div>
    <div id="projectList">
    ${this.projectDivList}
    </div>
    `
  }

  setEvent() {
    const insertionSection = $(`main#${this.insertionTagId}`);
    const projectList = $('#projectList', insertionSection);
    projectList.addEventListener('click', (e) => {
      const projectName = e.target.innerText;
      const selectedProjectPk = this.projectList[projectName];
      const projectView = new ProjectView(selectedProjectPk, projectName, 'main');
      projectView.init();
    })
  }

  getProjectList() {
    fetch(PROJECT_LIST_URL, {
      method: 'GET',
      credentials: 'include'
    }).then((res) => res.json())
      .then((res) => {
        const { project_list, project_owner } = res;
        this.projectOwner = project_owner;
        project_list.forEach((project) => {
          this.projectList[project.project_name] = project.project_pk;
        });
        this.createProjectDivList();
      }).catch(err => console.error('Error: ', err));
  }

  createProjectDivList() {
    this.projectDivList = Object.keys(this.projectList).reduce((acc, projectName) => {
      return acc += `<div class="project">${projectName}</div>\n`
    }, '');
    this.render();
    this.setEvent();
  }
}

export {
  ProjectList
}