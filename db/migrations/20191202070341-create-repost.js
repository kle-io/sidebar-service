
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('reposts', {
    username: {
      type: Sequelize.STRING,
    },
    trackId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('reposts'),
};
