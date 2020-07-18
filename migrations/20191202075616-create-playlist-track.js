
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlistTracks', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    playlistId: Sequelize.INTEGER,
    trackId: Sequelize.INTEGER,
  }),
  down: (queryInterface) => queryInterface.dropTable('playlistTracks'),
};
