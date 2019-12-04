const { playlistTracks } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('playlistTracks', [playlistTracks[0], playlistTracks[1], playlistTracks[2]], {}),
  down: (queryInterface) => queryInterface.bulkDelete('playlistTracks', playlistTracks, {}),
};
