module.exports = {
  development: {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  production: {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};
