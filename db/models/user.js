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
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.track, {
      through: 'favorite',
      foreignKey: 'username',
    });

    User.belongsToMany(models.track, {
      through: 'share',
      foreignKey: 'username',
    });

  };
  return User;
};