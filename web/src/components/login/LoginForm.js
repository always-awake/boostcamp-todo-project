import { LOGIN_URL } from '../../utils/URL';
import { $ } from '../../utils/utils';

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
    main.innerHTML = `
    <div id="loginForm">
      <div id="userId">
        <div>아이디: </div>
        <input type="text" id="userIdInput">
      </div>
      <div id="userPw">
        <div>비밀번호: </div>
        <input type="password" id="userPwInput">
      </div>
      <div id="loginButton">login</div>
    </div>
    `
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
    }).then((res) => res.json())
      .then((res) => console.log('Success:', res))
      .catch(err => console.error('Error: ', err));
  }
}

export {
  LoginForm
}