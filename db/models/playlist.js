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
  }, {
    timestamps: false,
  });
  Playlist.associate = (models) => {
    // associations can be defined here
    Playlist.belongsToMany(models.track, {
      through: {
        model: models.playlistTrack,
        unique: false,
      },
      foreignKey: 'playlistId',
      constraints: false,
    });
    // TODO: switch to belongsToMany
    // Playlist.hasMany(models.track);
  };
  return Playlist;
};
