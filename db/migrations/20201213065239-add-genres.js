module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('genres', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
  }, {
    timestamps: false,
  }),
  down: (queryInterface) => queryInterface.dropTable('genres'),
};
