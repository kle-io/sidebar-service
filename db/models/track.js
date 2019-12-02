'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('track', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    songUrl: DataTypes.STRING,
    genre: DataTypes.STRING,
    cover: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    comments: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    Track.hasMany(models.Like, {
      through: models.Like,
      foreignKey: 'trackId'
    });

    Track.hasMany(models.Repost, {
      through: models.Repost,
      foreignKey: 'trackId'
    });

    // albums
    Track.belongsTo(models.Album, {
      through: models.Album,
      foreignKey: 'albumId'
      targetKey: 'id'
    })

    // playlist
    Track.belongsToMany(models.Playlist, {
      through: 'Playlist_Track',
      foreignKey: 'trackId'
    })
  };
  return Track;
};