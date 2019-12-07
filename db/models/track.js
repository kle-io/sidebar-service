
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
    genre: DataTypes.STRING,
    cover: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    comments: DataTypes.INTEGER,
    reposts: DataTypes.INTEGER,
    userUsername: DataTypes.STRING,
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
    Track.belongsTo(models.user);
    Track.belongsTo(models.album, { foreignKey: 'albumId' });
    Track.belongsToMany(models.user, { through: 'favorite' });
    Track.belongsToMany(models.user, { through: 'share' });
    Track.belongsToMany(models.playlist, { through: models.playlistTrack });
  };
  return Track;
};
