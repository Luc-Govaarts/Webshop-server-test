"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: DataTypes.INTEGER,
      address: DataTypes.STRING
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.order);
  };
  return user;
};
