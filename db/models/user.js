module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    fullName: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.track, {
      through: {
        model: models.favorite,
        unique: 'false',
      },
      foreignKey: 'username',
      otherKey: 'trackId',
      constraints: 'false',
    });

    User.belongsToMany(models.track, {
      through: {
        model: models.share,
        unique: 'false',
      },
      foreignKey: 'username',
      otherKey: 'trackId',
      constraints: 'false',
    });
  };
  return User;
};
