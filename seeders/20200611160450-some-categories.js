"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags", [
      {
        title: "Pittig",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Romig",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vol",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rood flora",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Romig",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
