const express = require('express');
const router = express.Router();

const productoControllers = require('../controllers/productoControllers');

router.get('/products', productoControllers.products);



module.exports = router