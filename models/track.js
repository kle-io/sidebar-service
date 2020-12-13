
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('track', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    songUrl: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    comments: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER,
    userUsername: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'album',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });
  Track.associate = (models) => {
    Track.belongsTo(models.genre);
    Track.belongsTo(models.user);
    Track.belongsTo(models.album, { foreignKey: 'albumId' });
    Track.belongsToMany(models.user, { as: 'UserShare', through: 'share' });
    Track.belongsToMany(models.user, { as: 'UserFavorite', through: 'favorite' });
    Track.belongsToMany(models.playlist, { through: models.playlistTrack });
  };
  return Track;
};
