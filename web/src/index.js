import { LoginView } from './src/views/login';
import { ProjectListView } from './src/views/projectList';
import { LOGIN_URL } from './src/utils/URL';

const main = () => {
  fetch(LOGIN_URL, {
    method: 'GET',
    credentials: 'include',
  })
      .then((res) => res.json())
      .then((res) => {
        if (res['is_login']) {
          const projectList = new ProjectListView();
          projectList.render('main');
        } else {
          const loginView = new LoginView();
          loginView.render('main')
        }
      })
      .catch(err => console.error('Error: ', err));
};

window.onload = () => {
  main();
};
