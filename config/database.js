module.exports = {
  development: {
    host: 'localhost',
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
};
