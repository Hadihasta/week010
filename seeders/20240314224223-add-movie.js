'use strict';

const fs = require("fs")
// string
let data = fs.readFileSync("./movies.json","utf-8")
// parsing to json
data = JSON.parse(data)


data = (data).map((element) =>{
  return{
    title : element.title,
    genres : element.genres,
    year : element.year,
    photo :  element.photo,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})


// console.log(JSON.parse(data))


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Movies",data,{})


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
    await queryInterface.bulkDelete("Movies",null,{})
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
