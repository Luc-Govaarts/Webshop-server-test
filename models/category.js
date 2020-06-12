"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  category.associate = function (models) {
    category.hasMany(models.product);
  };
  return category;
};
