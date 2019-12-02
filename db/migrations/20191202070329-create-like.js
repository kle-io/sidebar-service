
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('likes', {
    username: {
      type: Sequelize.STRING,
    },
    trackId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('likes'),
};
