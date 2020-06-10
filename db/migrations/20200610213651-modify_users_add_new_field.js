
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'users',
      'followed',
      {
        type: Sequelize.STRING,
        allowNull: true,
        default: false,
      },
    ),
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn(
      'users',
      'followed',
    ),
  ]),
};
