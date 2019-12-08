module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('playlist', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cover: DataTypes.STRING,
    title: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER,
    userUsername: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  Playlist.associate = (models) => {
    Playlist.belongsToMany(models.track, { through: 'playlistTrack' });
    Playlist.belongsTo(models.user);
  };
  return Playlist;
};
