const loginFormHtml = () => {
  return `
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
};

export {
  loginFormHtml
}