const { albums } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('albums', albums, {}),
  down: (queryInterface) => queryInterface.bulkDelete('albums', albums, {}),
};
