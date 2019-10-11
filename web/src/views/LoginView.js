import { LoginForm } from '../components/login/LoginForm';


class LoginView {

  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
  }

  init() {
    this.render();
  }

  render() {
    const loginForm = new LoginForm(this.insertionTagId);
    loginForm.init();
  }
}

export {
  LoginView
};