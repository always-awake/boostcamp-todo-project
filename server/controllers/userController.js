const passport = require('passport');
const {
  loginSerializer,
} = require('../utils/serializers/userSerializers');

const userLogin = (req, res, next) => {
  passport.authenticate(
      'local-login', (err, user, info) => {
        const error = err || info;
        if (error) return res.json(401, error);
        if (!user) return res.json(404, {message: '일시적 오류 발생'});
        req.logIn(user, (err) => {
          if (err) return res.json(500, err);
          res.status(200);
          res.json(loginSerializer(req.user, '정상적으로 로그인됬습니다.'));
        })
      })(req, res, next);
};

module.exports = {
  userLogin,
};

