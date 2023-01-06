
const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('testing_express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
module.exports = sequelize;