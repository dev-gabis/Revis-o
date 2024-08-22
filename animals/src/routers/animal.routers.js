const express = require('express');
const AnimalController = require('../controllers/animals.controller');
const router = express.Router();

router.get('/animais', AnimalController.listar);
router.post('/cadastrar-animal', AnimalController.cadastrar);


module.exports = router;
