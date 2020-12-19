
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('favorites', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userUsername: Sequelize.STRING,
    trackId: Sequelize.INTEGER,
  }),
  down: (queryInterface) => queryInterface.dropTable('favorites'),
};
