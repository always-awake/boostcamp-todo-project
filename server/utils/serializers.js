const loginSerializer = (auth_user, msg) => {
  return {
    auth_user: auth_user,
    msg: msg
  }
};

const logoutSerializer = (msg) => {
  return {
    msg: msg
  }
};

module.exports = {
  loginSerializer,
  logoutSerializer
};