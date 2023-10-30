const ProviderService = require("../../services/ProviderService");

class DeleteProviderUseCase {
  

  async execute(id) {
    const savedAccount = await ProviderService.delete(id);
    return savedAccount;
  }
}

module.exports = new DeleteProviderUseCase();
