const loginSerializer = (auth_user, msg) => {
  return {
    auth_user: auth_user,
    msg: msg
  }
};

module.exports = {
  loginSerializer
};