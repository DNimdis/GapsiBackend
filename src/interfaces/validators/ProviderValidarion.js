const Joi = require('joi');
const ValidationError = require("../../share/ValidationError");

const validationCreate = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	image: Joi.string().min(6).required(),
});

const validationUpdate = Joi.object({
	id: Joi.number().required(),
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	image: Joi.string().min(6).required(),
});

const validationDelete = Joi.object({
	id: Joi.number().required()	
});

function handleErrorValidation(errors) {	
    const validationErrors = [];
    errors.details.forEach((error) => {
        const field = error.context.key;
        const value = error.message;
        validationErrors.push({ field, value  });
    });
     return new ValidationError(validationErrors);
}


const create = async (req, res, next) =>{
	const payload = {
          fullName: req.body.fullName,
		  email: req.body.email,
		  image: req.body.image
	  };
  
	  const { error } = validationCreate.validate(payload);
	  if (error) {
		  res.status(406);
		  return res.json(
			handleErrorValidation(error)
		  );
	  } else {
		  next();
	  }
  
}

const update = async (req, res, next) =>{
	const payload = {
			id: req.params.id,
			fullName: req.body.fullName,
			email: req.body.email,
			image: req.body.image          
	  };
  
	  const { error } = validationUpdate.validate(payload);
	  if (error) {
		  res.status(406);
		  return res.json(
			handleErrorValidation(error)
		  );
	  } else {
		  next();
	  }
  
}
const deleteProvider = async (req, res, next) =>{
	const payload = {
			id: req.params.id,         
	  };
  
	  const { error } = validationDelete.validate(payload);
	  if (error) {
		  res.status(406);
		  return res.json(
			handleErrorValidation(error)
		  );
	  } else {
		  next();
	  }
  
}

module.exports = {
    create,
	update,
	deleteProvider
};
