const { tracks } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('tracks', tracks, {}),
  down: (queryInterface) => queryInterface.bulkDelete('tracks', tracks, {}),
};
