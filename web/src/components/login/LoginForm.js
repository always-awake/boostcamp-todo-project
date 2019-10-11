import { loginFormHtml } from '../templates/login/loginForm';
import { LOGIN_URL } from '../../utils/URL';
import { $ } from '../../utils/utils';
import { ProjectListView } from '../../views/ProjectListView';


class LoginForm {

  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
  }

  init() {
    this.render();
    this.addEvent();
  }

  render() {
    const main = $(`main#${this.insertionTagId}`);
    main.innerHTML = loginFormHtml();
  }

  addEvent() {
    const loginForm = $('div#loginForm');
    const loginButton = $('div#loginButton', loginForm);
    loginButton.addEventListener('click', () => {
      const userId = $('#userIdInput', loginForm).value;
      const userPw = $('#userPwInput', loginForm).value;
      this.postLogin(userId, userPw);
    })
  }

  postLogin(userId, userPw) {
    fetch(LOGIN_URL, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        'id': userId,
        'password': userPw
      }),
      headers:{
        'Content-Type' : 'application/json;charset=utf-8'
      }
    }).then(() => {
        const projectListView = new ProjectListView('main');
        projectListView.init();
      })
      .catch(err => console.error('Error: ', err));
  }
}

export {
  LoginForm
}