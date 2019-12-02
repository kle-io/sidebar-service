
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlist_tracks', {
    playlistId: {
      type: Sequelize.INTEGER,
    },
    trackId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('playlist_tracks'),
};
