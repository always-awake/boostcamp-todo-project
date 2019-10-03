const passport = require('passport');
const {
  userAndMsgSerializer,
  idDuplicationMsgSerializer,
} = require('../utils/serializers/userSerializers');
const {
  msgSerializer,
} = require('../utils/serializers/commonSerializers');
const { getUserById } = require('../models/orm/userOrm');

/**
 * 유저 로그인 요청을 처리하는 함수
 * @param req
 * @param res
 * @param next
 */
const userLogin = (req, res, next) => {
  passport.authenticate(
      'local-login', (err, user, info) => {
        const error = err || info;
        if (error) return res.json(401, error);
        if (!user) return res.json(404, {message: '일시적 오류 발생'});
        req.logIn(user, (err) => {
          if (err) return res.json(500, err);
          res.status(200);
          res.json(userAndMsgSerializer(req.user, '정상적으로 로그인됬습니다.'));
        })
      })(req, res, next);
};

/**
 * 유저 로그아웃 요청을 처리하는 함수
 * @param req
 * @param res
 */
const userLogout = (req, res) => {
  req.logout();
  req.session.save(() => {
    res.status(200);
    res.json(msgSerializer('정상적으로 로그아웃됬습니다.'));
  })
};


const checkIdValidation = async (req, res) => {
  const { id } = req.query;
  const user = await getUserById(id);

  let result = null;
  let msg = null;
  let status = null;
  if (user === null) {
    status = 200;
    result = false;
    msg = '사용 가능한 아이디입니다.';
  } else {
    status = 406;
    result = true;
    msg = '중복된 아이디입니다.';
  }

  res.status(status);
  res.json(idDuplicationMsgSerializer(id, result, msg))
};

module.exports = {
  userLogin,
  userLogout,
  checkIdValidation
};

