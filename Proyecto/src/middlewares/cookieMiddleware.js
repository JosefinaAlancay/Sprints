const cookieParser = require('cookie-parser');
const session = require('express-session');

module.exports = (app) => {
  app.use(cookieParser());
  app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  }));
};