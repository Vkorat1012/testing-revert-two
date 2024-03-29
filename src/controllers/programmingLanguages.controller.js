const programmingLanguages = require('../services/programmingLanguages.service');

const User =require('../models/user');
const sequelize = require('../config/database')
async function get(req, res, next) {
  try {
      res.json(await programmingLanguages.getMultiple(req.query.page));
      
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    const name="vaibhav"
    sequelize.sync({force :true}).then(result=>User.create({name:name,email:'korat@gmail.com'}))
    res.json({name: name})
    next();
    // res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};
