module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  const PlaylistTrack = sequelize.define('playlistTrack', {
    playlistId: {
      type: DataTypes.INTEGER,
    },
    trackId: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false });

  return PlaylistTrack;
};
