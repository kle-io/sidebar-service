
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('share', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userUsername: {
      type: DataTypes.STRING,
      allowNull: false,
      reference: {
        model: 'user',
        key: 'username',
      },
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'track',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });
  Share.associate = (models) => {
    Share.belongsTo(models.track);
    Share.belongsTo(models.user);
  };
  return Share;
};
