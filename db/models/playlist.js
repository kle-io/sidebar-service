module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('playlist', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });
  Playlist.associate = (models) => {
    // associations can be defined here
    Playlist.belongsToMany(models.track, {
      through: 'playlist_track',
      foreignKey: 'playlistId',
    });
  };
  return Playlist;
};
