module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'users',
      'followed',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
