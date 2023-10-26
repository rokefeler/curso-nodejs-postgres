const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_DIALECT = encodeURIComponent(config.dialect);
const URI = `${DB_DIALECT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: `${DB_DIALECT}`,
  },
  production: {
    url: URI,
    dialect: `${DB_DIALECT}`,
  }
}
