const express = require('express');
const router = express.Router();

const productoControllers = require('../controllers/productoControllers');

router.get('/list', productoControllers.list);

router.get('/detail', productoControllers.detailProduct);

router.get('/search', productoControllers.searchResults);

router.get('/create', productoControllers.createPorduct);
router.post('/create', productoControllers.addProduct);

router.get('/edit', productoControllers.editProduct);
router.put('/edit', productoControllers.pushEdit);
router.delete('/edit', productoControllers.deleteProduct);



module.exports = router