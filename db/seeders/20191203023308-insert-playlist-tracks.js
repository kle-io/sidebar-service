const { playlistTracks } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('playlistTracks', playlistTracks, {}),
  down: (queryInterface) => queryInterface.bulkDelete('playlistTracks', playlistTracks, {}),
};
