module.exports = (sequelize, DataTypes) => {

  const Favorite = sequelize.define('favorite', {
    username: {
      type: DataTypes.STRING,
    },
    trackId: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false });
  return Favorite;
};
