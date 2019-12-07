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
  Favorite.associate = (models) => {
    Favorite.belongsTo(models.track);
    Favorite.belongsTo(models.user);
  };
  return Favorite;
};
