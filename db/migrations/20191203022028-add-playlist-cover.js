module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('playlists', 'cover', Sequelize.STRING, {}),

  down: (queryInterface) => queryInterface.removeColumn('playlists', 'cover'),
};
