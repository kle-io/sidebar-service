
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tracks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: Sequelize.STRING,
    songUrl: Sequelize.STRING,
    genre: Sequelize.STRING,
    cover: Sequelize.STRING,
    likes: Sequelize.INTEGER,
    comments: Sequelize.INTEGER,
    reposts: Sequelize.INTEGER,
    albumId: Sequelize.INTEGER,
    userUsername: Sequelize.INTEGER,
  }),
  down: (queryInterface) => queryInterface.dropTable('tracks'),
};
