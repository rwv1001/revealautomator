const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
const db ={}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const f_model = require(path.join(__dirname, file))
    const Datatypes = Sequelize
    const model = f_model(sequelize, Datatypes)
    db[model.name]=model
  })
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
 

