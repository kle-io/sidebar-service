'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('playlist', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.hasMany(models.Track, {
      through: 'Playlist_Track',
      foreignKey: 'playlistId'
    })
  };
  return Playlist;
};