'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('like', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      reference: {
        model: 'User',
        key: 'username'
      }
    },
    trackId: {
      type: DataTypes.INTEGER
      allowNull: false,
      references: {
        model: 'Track',
        key: 'id'
      }
    }
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};