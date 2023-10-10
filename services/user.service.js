const boom = require('@hapi/boom');
const getConexion = require('./../libs/postgres');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConexion();
    const rta = await client.query('SELECT * FROM Tasks');
    return rta.rows;
   //return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
