module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    fullName: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  User.associate = (models) => {
    User.belongsToMany(models.track, { through: 'favorite' });
    User.belongsToMany(models.track, { through: 'share' });
  };
  return User;
};
