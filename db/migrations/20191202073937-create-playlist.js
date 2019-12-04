
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    likes: {
      type: Sequelize.INTEGER,
    },
    reposts: {
      type: Sequelize.INTEGER,
    },
    cover: {
      type: Sequelize.STRING,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('playlists'),
};
