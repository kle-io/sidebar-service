
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
  Track.associate = function (models) {
    // associations can be defined here
    Track.belongsToMany(models.user, {
      through: 'favorite',
      foreignKey: 'trackId',
    });

    Track.belongsToMany(models.user, {
      through: 'share',
      foreignKey: 'trackId',
    });

    // // albums
    Track.belongsTo(models.album, {
      foreignKey: 'albumId',
    });

    // playlist
    Track.belongsToMany(models.playlist, {
      through: models.playlistTrack,
      foreignKey: 'trackId',
    });
  };
  return Track;
};
