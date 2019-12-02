module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  const Playlist_Track = sequelize.define('playlist_track', {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'Playlist',
        key: 'id',
      },
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'Track',
        key: 'id',
      },
    },
  }, {});
  Playlist_Track.associate = function(models) {
    // associations can be defined here
  };
  return Playlist_Track;
};
