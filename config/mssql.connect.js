
var Sequelize = require("sequelize");

const sequelize = new Sequelize('database', 'root', '123', {
    host: 'localhost',
    dialect: 'mssql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })

console.log(`SQL Configuration:`);

module.exports = {sequelize :sequelize}