
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlistTracks', {
    playlistId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'playlists',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    trackId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'tracks',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('playlistTracks'),
};
