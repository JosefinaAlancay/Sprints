module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'guitar_app',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'guitar_app_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'guitar_app_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
