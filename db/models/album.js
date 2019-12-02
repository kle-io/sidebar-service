'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('album', {
    id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.hasMany(models.Track)
  };
  return Album;
};