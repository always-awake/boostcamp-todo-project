import { LOGIN_URL } from './utils/URL';
import { LoginView } from './views/LoginView';
import { ProjectListView } from './views/ProjectListView';


const main = () => {
  fetch(LOGIN_URL, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json())
    .then((res) => {
      if (res.is_login) {
        const projectListView = new ProjectListView('main');
        projectListView.init();
      } else {
        const loginView = new LoginView('main');
        loginView.init();
      }
    }).catch(err => console.error('Error: ', err));
};

window.onload = () => {
  main();
};
