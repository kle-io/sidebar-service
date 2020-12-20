module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return Genre;
};
