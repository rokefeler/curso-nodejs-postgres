const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_DIALECT = encodeURIComponent(config.dialect);
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `${DB_DIALECT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  //dialect: 'postgres',
  dialect: DB_DIALECT,
  logging: true,
});

setupModels(sequelize);

//Warning, se utilizara migraciones
//sequelize.sync();

module.exports = sequelize;
