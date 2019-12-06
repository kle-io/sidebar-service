
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
    albumId: DataTypes.INTEGER,
    artist: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  Track.associate = (models) => {
    // associations can be defined here
    Track.belongsToMany(models.user, {
      through: {
        model: models.favorite,
        unique: 'false',
        as: 'favorites',
      },
      otherkey: 'username',
      constraints: false,
    });

    Track.belongsToMany(models.user, {
      through: {
        model: models.share,
        unique: 'false',
        as: 'shares',
      },
      otherkey: 'username',
      constraints: false,
    });

    // // albums
    Track.belongsTo(models.album, { constraints: false });

    // playlist
    Track.belongsToMany(models.playlist, {
      through: models.playlistTrack,
      otherkey: 'playlistId',
      constraints: false,
    });
  };
  return Track;
};
