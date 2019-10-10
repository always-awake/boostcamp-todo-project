import { LoginForm } from '../components/login/LoginForm';

class LoginView {

  constructor(insertionTagId) {
    this.insertionTagId = insertionTagId;
  }

  render() {
    const loginForm = new LoginForm(this.insertionTagId);
    loginForm.init();
  }
}

export {
  LoginView
};