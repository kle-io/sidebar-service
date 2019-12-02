
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    username: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    fullName: {
      type: Sequelize.STRING,
    },
    followers: {
      type: Sequelize.INTEGER,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('users'),
};
