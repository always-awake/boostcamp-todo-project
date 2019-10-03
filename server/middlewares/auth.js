const { msgSerializer } = require('../utils/serializers/commonSerializers');
const {
  selectAuth
} = require('../models/orm/authOrm');

/**
 * 로그인이 된 유저인지 확인하는 함수
 * @param req
 * @param res
 * @param next
 */
const isLogin = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  } else {
    res.status(401);
    res.json(msgSerializer('로그인이 되어있지 않습니다. 로그인해주세요.'));
  }
};

/**
 * 요청하는 유저가 해당 프로젝트에 대해 OWNER 권한(=편집권한)이 있는지 체크하는 함
 * @param req
 * @param res
 * @param next
 */
const isOwner = async (req, res, next) => {
  const { user, body } = req;
  const { projectPk } = body;
  const auth = await selectAuth(user.pk, projectPk);
  if (auth === 'OWNER') {
    return next();
  } else {
    res.status(401);
    res.json(msgSerializer('요청에 대한 권한이 없습니다.'));
  }
};

module.exports = {
  isLogin,
  isOwner
};