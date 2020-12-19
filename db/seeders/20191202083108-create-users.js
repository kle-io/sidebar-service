const { users } = require('../sampledata/sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users', users, {}),
  down: (queryInterface) => queryInterface.bulkDelete('users', users, {}),
};
