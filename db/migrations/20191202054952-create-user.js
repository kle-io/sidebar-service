
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    username: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    fullName: Sequelize.STRING,
    followers: Sequelize.INTEGER,
    avatar: Sequelize.STRING,
    location: Sequelize.STRING,
  }),
  down: (queryInterface) => queryInterface.dropTable('users'),
};
