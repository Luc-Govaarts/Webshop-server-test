"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        title: "Home",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
