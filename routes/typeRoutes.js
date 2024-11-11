const express = require('express');
const { getAllTypes, createType } = require('../controllers/typeController');
const router = express.Router();

router.get('/', getAllTypes);
router.post('/create', createType);

module.exports = router;
