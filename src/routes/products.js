const express = require('express');
const router = express.Router();

const productoControllers = require('../controllers/productoControllers');

router.get('/list', productoControllers.list);

router.get('/detail', productoControllers.detailProduct);

router.get('/search', productoControllers.searchResults);



module.exports = router