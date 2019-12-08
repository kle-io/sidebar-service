
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('albums', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cover: Sequelize.STRING,
    type: Sequelize.STRING,
    title: Sequelize.STRING,
    year: Sequelize.INTEGER,
    userUsername: Sequelize.STRING,
  }),
  down: (queryInterface) => queryInterface.dropTable('albums'),
};
