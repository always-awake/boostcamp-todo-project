const userAndMsgSerializer = (auth_user, msg) => {
  return {
    auth_user: auth_user,
    msg: msg
  }
};

const msgSerializer = (msg) => {
  return {
    msg: msg
  }
};

module.exports = {
  userAndMsgSerializer ,
  msgSerializer
};