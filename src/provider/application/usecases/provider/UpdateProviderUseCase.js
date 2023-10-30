const ProviderService = require("../../services/ProviderService");

class UpdateProviderUseCase {
  

  async execute(id,providerDto) {
    const savedAccount = await ProviderService.update(id,providerDto);
    return savedAccount;
  }
}

module.exports = new UpdateProviderUseCase();
