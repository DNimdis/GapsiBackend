const express = require('express');
const ProviderController = require('../controllers/ProviderController');
const ProviderValidarion = require('../validators/ProviderValidarion');


const router = express.Router();
router.get('/all', ProviderController.getAll);
router.get('/getTotalPages', ProviderController.getTotalPages);
router.get('/welcome', ProviderController.welcome);
router.post('/create',ProviderValidarion.create, ProviderController.create);
router.put('/:id/update',ProviderValidarion.update, ProviderController.update);
router.delete('/:id/delete',ProviderValidarion.deleteProvider, ProviderController.deleteProvider);
module.exports = router;