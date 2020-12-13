
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
    genreId: Sequelize.INTEGER,
    cover: Sequelize.STRING,
    likes: Sequelize.INTEGER,
    comments: Sequelize.INTEGER,
    reposts: Sequelize.INTEGER,
    albumId: Sequelize.INTEGER,
    plays: Sequelize.INTEGER,
    userUsername: Sequelize.STRING,
  }),
  down: (queryInterface) => queryInterface.dropTable('tracks'),
};
