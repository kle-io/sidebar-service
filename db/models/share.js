
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('share', {
    username: {
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
  return Share;
};
