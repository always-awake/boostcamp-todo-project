const LocalStrategy = require('passport-local').Strategy;
const {
  selectUserById,
  insertUser,
} = require('../models/orm/userOrm');
const { makeUserSessionData } = require('../utils/session');

module.exports = (passport) => {
  passport.serializeUser((authUser, done) => {
    done(null, authUser);
  });
  passport.deserializeUser((authUser, done) => {
    done(null, authUser);
  });

  passport.use(
    'local-login',
    new LocalStrategy ({
        usernameField: 'id',
        passwordField: 'password',
        session: true,
        passReqToCallback: false,
      }, async (id, password, done) => {
        const user = await selectUserById(id);
        if (user === null) {
          return done(null, false, { message: '존재하지 않는 아이디' });
        } else if (user.password !== password) {
          return done(null, false, { message: '비밀번호 잘못입력' })
        }
        return done(null, makeUserSessionData(user));
      }
    )
  );

  passport.use(
    'local-signup',
    new LocalStrategy({
      usernameField: 'id',
      passwordField: 'password',
      session: true,
      passReqToCallback: true
    }, async (req, id, password, done) => {
      const selectResult = await selectUserById(id);
      if (selectResult !== null) return done(null, false, { message: '사용할 수 없는 아이디입니다.' });
      const newUser = await insertUser(req);
      if (newUser !== null) {
        return done(null, newUser);
      } else {
        return done(null, false, { message: '일시적 오류입니다. 다시 시도해주세요.' });
      }
  }));
};