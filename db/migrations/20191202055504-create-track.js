
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tracks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    songUrl: {
      type: Sequelize.STRING,
    },
    genre: {
      type: Sequelize.STRING,
    },
    cover: {
      type: Sequelize.STRING,
    },
    likes: {
      type: Sequelize.INTEGER,
    },
    comments: {
      type: Sequelize.INTEGER,
    },
    reposts: {
      type: Sequelize.INTEGER,
    },
    albumId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'album',
        key: 'id',
      },
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('tracks'),
};
