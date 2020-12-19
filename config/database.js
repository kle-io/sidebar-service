const fs = require('fs');

module.exports = {
  development: {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB || 'kleio',
  },
  production: {
    dialect: 'mysql',
    host: fs.readFileSync('/run/secrets/DB_HOST', 'utf8').trim(),
    username: fs.readFileSync('/run/secrets/DB_USER', 'utf8').trim(),
    password: fs.readFileSync('/run/secrets/DB_PASS', 'utf8').trim(),
    database: fs.readFileSync('/run/secrets/DB_NAME', 'utf8').trim(),
  },
};
