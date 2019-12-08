module.exports = (sequelize, DataTypes) => {

  const Favorite = sequelize.define('favorite', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userUsername: {
      type: DataTypes.STRING,
    },
    trackId: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false });
  Favorite.associate = (models) => {
    Favorite.belongsTo(models.track);
    Favorite.belongsTo(models.user);
  };
  return Favorite;
};
