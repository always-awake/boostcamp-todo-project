const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const passport = require('passport');
const flash = require('connect-flash');
const cors = require('cors')
const passportConfig = require('./lib/passport');
const dotEnv = require('dotenv');
dotEnv.config();

// router import
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');
const projectRouter = require('./routes/projectRouter');
const taskRouter = require('./routes/taskRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// cors setting
const whitelist = ['http://192.168.0.105:8000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
};
app.use(cors(corsOptions));

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET_CODE));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/media', express.static('media'));

// session - redis
const redisClient = redis.createClient(
    process.env.REDIS_PORT,
    process.env.REDIS_HOST
);

app.use(session({
  name: 'todo-auth-session',
  secret: process.env.SESSION_SECRET_CODE,
  resave: false,
  saveUninitialized: true,
  expires: new Date(Date.now() + 10000),
  store: new RedisStore({
    client: redisClient,
    ttl: 60 * 60 * 60, // 1시간동안 유효
  }),
  cookie: {
    maxAge: 1000 * 60 * 60, // 1시간동안 유효
  }
}));
//flash
app.use(flash());

// passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);


// router setting
app.use('/admin', adminRouter);
app.use('/users', userRouter);
app.use('/projects', projectRouter);
app.use('/tasks', taskRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
