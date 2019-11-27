const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usersProfile = require('./routes/profile');
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')

const sequelize = require('./models')
require('./models/associations')

// Initialize database
sequelize.sync() 

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'secret key' }))
app.use(express.static(path.join(__dirname, 'public')));

// Assign routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', usersProfile);
app.use('/login', loginRouter);
app.use('/signup',signupRouter);

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
