import { Observer } from '../utils/Observer';
import { Project } from '../components/project/Project';
import { ProjectController } from '../controllers/ProjectController';


class ProjectView {

  constructor(projectPk, projectName, insertionTagId) {
    this.projectName = projectName;
    this.insertionTagId = insertionTagId;
    this.observer = new Observer();
    this.projectController = new ProjectController(this.observer, projectPk);
    this.project = new Project(this.projectName, this.insertionTagId);
  }

  init() {
    this.observer.addSubscriber({
      event: 'updateProjectView',
      handler: this.updateView,
      target: this
    });
    this.projectController.init();
  }

  updateView(responseData) {
    this.target.project.init(responseData);
  }
}

export {
  ProjectView
}