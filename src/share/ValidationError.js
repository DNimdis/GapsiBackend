class ValidationError extends Error {
    constructor(errors) {
      super("Validation error");
      this.name = "ValidationError";
      this.message = errors;
      this.errors = errors;
      this.code = "VALIDATION_ERROR"
      this.status = 404;
    }

  }
  
  module.exports = ValidationError;
  