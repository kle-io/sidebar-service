
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('playlists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: Sequelize.STRING,
    likes: Sequelize.INTEGER,
    reposts: Sequelize.INTEGER,
    cover: Sequelize.STRING,
    userUsername: Sequelize.STRING,
  }),
  down: (queryInterface) => queryInterface.dropTable('playlists'),
};
