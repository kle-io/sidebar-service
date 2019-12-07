
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
  }),
  down: (queryInterface) => queryInterface.dropTable('albums'),
};
