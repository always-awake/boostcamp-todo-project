class ProjectModel {

  constructor(observer) {
    this.observer = observer;
    this.projectData = null;
  }
  
  updateData(res) {
    this.projectData = res;
    this.observer.notifySubscriber('updateProjectView', res);
  }
}

export {
  ProjectModel
}