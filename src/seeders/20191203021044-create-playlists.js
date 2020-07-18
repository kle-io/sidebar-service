const { playlists } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('playlists', playlists, {}),
  down: (queryInterface) => queryInterface.bulkDelete('playlists', playlists, {}),
};
