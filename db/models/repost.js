'use strict';
module.exports = (sequelize, DataTypes) => {
  const Repost = sequelize.define('repost', {
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
  Repost.associate = function(models) {
    // associations can be defined here
  };
  return Repost;
};