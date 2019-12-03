
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shares', {
    username: {
      type: Sequelize.STRING,
      references: {
        model: 'users',
        key: 'username',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    trackId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'tracks',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('shares'),
};
