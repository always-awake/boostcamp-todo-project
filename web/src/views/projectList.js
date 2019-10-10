import { ProjectList } from "../components/projectList/projectList";

class ProjectListView {
  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
  }

  render() {
    const projectList = new ProjectList(this.insertionTagId);
    projectList.init();
  }
}

export {
  ProjectListView
}