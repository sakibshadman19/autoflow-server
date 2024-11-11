const express = require('express');
const { createClient, getAllClients, getClientById, updateClientStatus, saveClientData } = require('../controllers/clientController');
const router = express.Router();

router.post('/create', createClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.put('/:id/status', updateClientStatus);
router.put('/save', saveClientData);

module.exports = router;
