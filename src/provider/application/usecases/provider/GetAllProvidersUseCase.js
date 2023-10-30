const ProviderService = require("../../services/ProviderService");

class GetAllProvidersUseCase {
  

  async execute({page, pageSize}) {    
    const savedAccount = await ProviderService.all(page, pageSize);
    return savedAccount;
  }
}

module.exports = new GetAllProvidersUseCase();
