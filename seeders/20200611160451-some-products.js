"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "Boerenseizoenskaas sesam en specerijen",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kaas.nl%2Fnl%2Fd%2Fpittig-borrelkaasplankje%2F&psig=AOvVaw1IEeD_T8VhkajyKIkqMP4P&ust=1592218028959000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCj3cuQgeoCFQAAAAAdAAAAABAD",
        description: "Speciaal ontwikkeld op de boerderij: deze overheerlijke, romige boerenkaas is op smaak gebracht met een smaakvolle melange van sesam, peper en andere specerijen. Bekijk hier waar de boerenseizoenskaas gemaakt wordt.",
        price: 30,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "",
        imageUrl: "",
        description: "",
        price: ,
        tagId: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
