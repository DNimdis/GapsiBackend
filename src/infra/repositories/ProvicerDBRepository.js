/*const BadgeRepository = require("../../domain/acount/repositories/BadgeRepository");
const BadgeEntity = require("../../domain/badge/entities/badge");
const badges = require("../database/models/badge");*/

const ProviderDto = require("../../interfaces/dtos/ProviderDto");
const Provider = require("../database/Provider");

class ProvicerDBRepository {

  async all(page = 1, pageSize = 10) {        
    const provider = new Provider();
    const data = await provider.findAll();
    const startIndex = (page - 1) * pageSize;
    const endIndex = parseFloat(startIndex) + parseFloat(pageSize);    
    const paginatedData = data.slice(startIndex, endIndex).map(item => new ProviderDto(item));
    return paginatedData;
  }

  async getTotalPages(pageSize=10) {
    const provider = new Provider();
    const data = await provider.findAll();
    const totalItems = data.length;
    return Math.ceil(totalItems / pageSize);
  }

  async create(item) {
    const provider = new Provider();
    const newItem = await provider.create(item);
    return new ProviderDto(newItem);
  }

  async update(index, updatedItem) {
    const provider = new Provider();
    const result = await provider.update(index, updatedItem);
    return new ProviderDto(result);
  }

  async delete(index) {
    const provider = new Provider();
    const deletedItem = await provider.delete(index);
    return deletedItem;
  }

  async isNameUnique(name) {
    try {
      const provider = new Provider();
      const existingProvider = await provider.findByName(name);
      return !existingProvider; // Retorna true si no existe un proveedor con el mismo nombre
    } catch (error) {
      throw new Error(`Error al verificar la unicidad del nombre: ${error.message}`);
    }
  }
  
  
}

module.exports = new ProvicerDBRepository();
