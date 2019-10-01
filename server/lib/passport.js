const LocalStrategy = require('passport-local').Strategy;
const { getUserById } = require('../models/orm');
const { makeUserSessionData } = require('../utils/session');

module.exports = (passport) => {
  passport.use(
    'local-login',
    new LocalStrategy ({
        usernameField: 'id',
        passwordField: 'password',
        session: true,
        passReqToCallback: false,
      }, async (id, password, done) => {
        const user = await getUserById(id);
        if (user === null) {
          return done(null, false, { message: '존재하지 않는 아이디' });
        } else if (user.password !== password) {
          return done(null, false, { message: '비밀번호 잘못입력' })
        }
        return done(null, makeUserSessionData(user));
      }
    )
  );

  passport.serializeUser((authUser, done) => {
    done(null, authUser);
  });
  passport.deserializeUser((authUser, done) => {
    done(null, authUser);
  });
};