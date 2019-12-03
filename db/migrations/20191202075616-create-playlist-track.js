
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlistTracks', {
    playlistId: {
      type: Sequelize.INTEGER,
    },
    trackId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('playlistTracks'),
};
