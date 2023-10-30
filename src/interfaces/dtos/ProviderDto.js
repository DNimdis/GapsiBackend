const Name = require("../../provider/value-objects/Name");

class ProviderDto {
  constructor({ id, fullName, email, image }) {
    this.id = id;
    this.fullName = fullName;  
    this.email = email;
    this.image = image;    
  }
  
}

module.exports = ProviderDto;
