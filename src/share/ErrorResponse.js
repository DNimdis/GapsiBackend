class ErrorResponse {

    constructor(error) {
         this.status = error.status || 500;
         this.message = error.message || "Se ha producido un error inesperado.";
        this.code = error.code || "UNEXPECTED_ERROR";        
    }

    getStatus(){
        return this.status;
    }

    getResponse(){

        return { status: this.status, message:this.message, code: this.code };
    }
    
}

module.exports = ErrorResponse;