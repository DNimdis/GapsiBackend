
const CreateProviderUseCase = require("../../provider/application/usecases/provider/CreateProviderUseCase");
const DeleteProviderUseCase = require("../../provider/application/usecases/provider/DeleteProviderUseCase");
const GetAllProvidersUseCase = require("../../provider/application/usecases/provider/GetAllProvidersUseCase");
const GetTotalPageUseCase = require("../../provider/application/usecases/provider/GetTotalPageUseCase");
const UpdateProviderUseCase = require("../../provider/application/usecases/provider/UpdateProviderUseCase");
const ErrorResponse = require("../../share/ErrorResponse");
const ProviderDto = require("../dtos/ProviderDto");

const getAll = async (req, res, next) => {
 
    try {

        const { page, pageSize }= req.query;
        const providers = await GetAllProvidersUseCase.execute({page, pageSize});
      res.status(201).json({ status: 200, providers});
    } catch (error) {
      console.log(error);    
      let response = new ErrorResponse(error);
      res.status(response.getStatus()).json(response.getResponse());
    }
  }
const getTotalPages = async (req, res, next) => {
 
    try {

        const { pageSize }= req.query;
        const pages = await GetTotalPageUseCase.execute(pageSize);
      res.status(201).json({ status: 200, pages});
    } catch (error) {
      console.log(error);    
      let response = new ErrorResponse(error);
      res.status(response.getStatus()).json(response.getResponse());
    }
  }

const welcome = async (req, res, next) => {
 
    try {

        
      res.status(201).json({ status: 200, data:{ candidate:"candidato 1",  version: '0.0.1' } });
    } catch (error) {
      console.log(error);    
      let response = new ErrorResponse(error);
      res.status(response.getStatus()).json(response.getResponse());
    }
  }

  const create = async (req, res, next) => {
 
    try {
        const providerDto = new ProviderDto(req.body)        
        const provider = await CreateProviderUseCase.execute(providerDto);
     
      res.status(201).json({ status: 200, provider});
    } catch (error) {
      console.log(error);    
      let response = new ErrorResponse(error);
      res.status(response.getStatus()).json(response.getResponse());
    }
  }
  
  const update = async (req, res, next) => {
 
    try {
        const ID = req.params.id;
        const providerDto = new ProviderDto(req.body);        
        const provider = await UpdateProviderUseCase.execute(ID,providerDto);
     
      res.status(201).json({ status: 200, provider});
    } catch (error) {
      console.log(error);    
      let response = new ErrorResponse(error);
      res.status(response.getStatus()).json(response.getResponse());
    }
  }

  const deleteProvider = async (req, res, next) => {
 
    try {
        const ID = req.params.id;        
        await DeleteProviderUseCase.execute(ID);     
      res.status(201).json({ status: 200, msg: "Proveedor Eliminado" });
    } catch (error) {
      console.log(error);    
      let response = new ErrorResponse(error);
      res.status(response.getStatus()).json(response.getResponse());
    }
  }


module.exports = {
    getAll,
    create,
    update,
    deleteProvider,
    getTotalPages,
    welcome
}