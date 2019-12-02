'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Like, {
      through: models.Like,
      foreignKey: 'username'
    })

    User.hasMany(models.Repost, {
      through: models.Repost,
      foreignKey: 'username'
    })

  };
  return User;
};