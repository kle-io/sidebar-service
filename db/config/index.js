const fs = require('fs');

module.exports = {
  development: {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
  production: (() => {
    if (process.env.NODE_ENV === 'production') 
      return {
        dialect: 'mysql',
        host: fs.readFileSync('/run/secrets/DB_HOST', 'utf8').trim(),
        username: fs.readFileSync('/run/secrets/DB_USER', 'utf8').trim(),
        password: fs.readFileSync('/run/secrets/DB_PASS', 'utf8').trim(),
        database: fs.readFileSync('/run/secrets/DB_NAME', 'utf8').trim(),
      }
    else return;
  })(),
};
