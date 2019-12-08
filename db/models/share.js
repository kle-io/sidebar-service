
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
    },
    trackId: {
      type: DataTypes.INTEGER,
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
