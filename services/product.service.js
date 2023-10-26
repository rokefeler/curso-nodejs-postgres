const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { query } = require('express');

class ProductsService {

  constructor(){
  }

  async create(data) {
    const newProduct = await models.Product.create(data,
      //{ include: ['category'] }
      );
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category']
    }
    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const rta = await models.Product.findAll(options);
    return rta;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = ProductsService;
