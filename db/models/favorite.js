module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('favorite', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      reference: {
        model: 'user',
        key: 'username',
      },
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'track',
        key: 'id',
      },
    },
  }, { timestamps: false });
  return Favorite;
};
