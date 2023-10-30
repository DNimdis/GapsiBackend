const ProviderService = require("../../services/ProviderService");

class CreateProviderUseCase {
  

  async execute(providerDto) {    
    const savedAccount = await ProviderService.create(providerDto);
    return savedAccount;
  }
}

module.exports = new CreateProviderUseCase();
