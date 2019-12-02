
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('favorites', {
    username: {
      type: Sequelize.STRING,
    },
    trackId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('favorites'),
};
