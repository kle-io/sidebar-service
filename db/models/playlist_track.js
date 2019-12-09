module.exports = (sequelize, DataTypes) => {
  const PlaylistTrack = sequelize.define('playlistTrack', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    playlistId: {
      type: DataTypes.INTEGER,
    },
    trackId: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false });
  PlaylistTrack.associate = (models) => {
    PlaylistTrack.belongsTo(models.track);
    PlaylistTrack.belongsTo(models.playlist);
  };

  return PlaylistTrack;
};
