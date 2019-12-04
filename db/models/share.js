
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('share', {
    username: {
      type: DataTypes.STRING,
    },
    trackId: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
  });
  return Share;
};
