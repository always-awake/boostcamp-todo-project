import { LOGIN_URL } from "../../utils/URL";

class LoginForm {

  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
  }

  init() {
    this.render();
    this.addEvent();
  }

  render() {
    const main = document.querySelector(`main#${this.insertionTagId}`);
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
    const loginForm = document.querySelector('div#loginForm');
    const loginButton = loginForm.querySelector('div#loginButton');
    loginButton.addEventListener('click', () => {
      const userId = loginForm.querySelector('#userIdInput').value;
      const userPw = loginForm.querySelector('#userPwInput').value;
      this.requestLogin(userId, userPw);
    })
  }

  requestLogin(userId, userPw) {
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
    })
      .then((res) => res.json())
      .then((res) => console.log('Success:', res))
        .catch(err => console.error('Error: ', err));
  }
}

export {
  LoginForm
}