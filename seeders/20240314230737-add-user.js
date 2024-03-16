'use strict';

const fs = require("fs")

let data = fs.readFileSync("./users.json","utf-8")
data = JSON.parse(data)
data = (data).map((element) =>{
  return{
    email : element.email,
    gender : element.gender,
    password : element.password,
    role :  element.role,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users",data,{})

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users",null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
