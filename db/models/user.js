module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    fullName: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    followed: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  User.associate = (models) => {
    User.belongsToMany(models.track, { as: 'UserFavorite', through: 'favorite' });
    User.belongsToMany(models.track, { as: 'UserShare', through: 'share' });
  };
  return User;
};
