"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "tag",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  tag.associate = function (models) {
    tag.hasMany(models.product);
  };
  return tag;
};
