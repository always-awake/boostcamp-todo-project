import { LoginView } from './views/login';
import { ProjectListView } from './views/projectList';
import { LOGIN_URL } from './utils/URL';

const main = () => {
  fetch(LOGIN_URL, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json())
    .then((res) => {
      if (res.is_login) {
        const projectListView = new ProjectListView('main');
        projectListView.render();
      } else {
        const loginView = new LoginView('main');
        loginView.render();
      }
    }).catch(err => console.error('Error: ', err));
};

window.onload = () => {
  main();
};
