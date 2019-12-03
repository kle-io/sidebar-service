
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('albums', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cover: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('albums'),
};
