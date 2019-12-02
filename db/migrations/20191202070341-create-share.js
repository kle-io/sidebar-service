
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shares', {
    username: {
      type: Sequelize.STRING,
    },
    trackId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('shares'),
};
