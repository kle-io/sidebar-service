const { users } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users', users, {}),
  down: (queryInterface) => queryInterface.bulkDelete('users', users, {}),
};
