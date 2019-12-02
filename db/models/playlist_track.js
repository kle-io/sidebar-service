module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  const Playlist_Track = sequelize.define('playlist_track', {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'playlist',
        key: 'id',
      },
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'track',
        key: 'id',
      },
    },
  }, { timestamps: false });

  return Playlist_Track;
};
