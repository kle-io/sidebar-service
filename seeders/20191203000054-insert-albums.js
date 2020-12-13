const { albums } = require('../sampledata/sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('albums', albums, {}),
  down: (queryInterface) => queryInterface.bulkDelete('albums', albums, {}),
};
