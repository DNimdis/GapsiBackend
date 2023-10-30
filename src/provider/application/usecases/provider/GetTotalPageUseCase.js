const ProviderService = require("../../services/ProviderService");

class GetTotalPageUseCase {
  

  async execute(pageSize) {    
    const savedAccount = await ProviderService.getTotalPages(pageSize);
    return savedAccount;
  }
}

module.exports = new GetTotalPageUseCase();