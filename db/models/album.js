module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('album', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cover: DataTypes.STRING,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
  }, { timestamps: false });
  return Album;
};
