const express = require('express');
const router = express.Router();

const productoControllers = require('../controllers/productoControllers');

router.get('/', productoControllers.home);



module.exports = router