module.exports = {
  development: {
    host: 'localhost',
    dialect: 'mysql',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB || 'kleio',
  },
};
