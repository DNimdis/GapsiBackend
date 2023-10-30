const provicerDBRepository = require("../../../infra/repositories/ProvicerDBRepository");
const ValidationError = require("../../../share/ValidationError");
const Name = require("../../value-objects/Name");


class ProviderService {
  

  async all(page, pageSize) {
    const providers = await provicerDBRepository.all(page, pageSize);
    return providers;
  }
  async getTotalPages(pageSize) {
    const total = await provicerDBRepository.getTotalPages(pageSize);
    return total;
  }

  async create(providerDto) {
    
    const name = new Name(providerDto.fullName, provicerDBRepository);
    // Verificar unicidad del nombre
    const isNameUnique = await name.isUnique();
    if (!isNameUnique) {
      throw new ValidationError('El nombre no es único');
    }

    const provider = await provicerDBRepository.create(providerDto);
    return provider;
  }
  async update(id, params) {
    const provider = await provicerDBRepository.update(id, params);
    return provider;
  }

  async delete(id) {
    const provider = await provicerDBRepository.delete(id);
    return provider;
  }

}

module.exports = new ProviderService();
