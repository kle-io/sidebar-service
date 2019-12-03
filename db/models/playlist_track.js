module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  const PlaylistTrack = sequelize.define('playlistTrack', {
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

  return PlaylistTrack;
};
