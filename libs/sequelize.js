const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
// Option 1: Passing a connection URI
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
}); // Example for postgres

module.exports = sequelize;
