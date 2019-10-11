import { ProjectList } from '../components/projectList/ProjectList';


class ProjectListView {

  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
  }

  init() {
    this.render();
  }

  render() {
    const projectList = new ProjectList(this.insertionTagId);
    projectList.init();
  }
}

export {
  ProjectListView
}