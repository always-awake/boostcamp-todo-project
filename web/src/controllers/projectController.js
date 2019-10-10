import { ProjectModel } from '../models/projectModel'
import { PROJECT_URL } from '../utils/URL';

class ProjectController {
  constructor(observer, projectPk) {
    this.projectModel = new ProjectModel(observer);
    this.projectPk = projectPk;
  }

  init() {
    this.requestProject();
  }

  requestProject() {
    fetch(PROJECT_URL(this.projectPk), {
      method: 'GET',
      credentials: 'include'
    }).then((res) => res.json())
      .then((res) => {
        this.projectModel.updateData(res);
      }).catch(err => console.error('Error: ', err));
  }
}

export {
  ProjectController
}