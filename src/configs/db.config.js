const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('programming_languages', 'root', '', {
  host: 'localhost',
   //  port : 8000,
  dialect: 'mysql' //Dialect depends on the database engine you are using. hear we are using mysql 
});
module.exports = sequelize;



sequelize.authenticate()
  .then(()=>{
     console.log("Connection successful")})
  .catch(err=>{
    console.log("Error to comnnect")
  })




