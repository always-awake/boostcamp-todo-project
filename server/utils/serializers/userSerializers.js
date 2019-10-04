const userAndMsgSerializer = (auth_user, msg) => {
  return {
    auth_user: auth_user,
    msg: msg
  }
};

const idDuplicationMsgSerializer = (checkedId, result, msg) => {
  return {
    checked_id: checkedId,
    id_duplication: result,
    msg: msg
  }
};

module.exports = {
  userAndMsgSerializer,
  idDuplicationMsgSerializer
};