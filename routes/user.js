const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userController');

router.get('/login', userControllers.login);

router.get('/register', userControllers.register);

router.get('/carrito', userControllers.trolley);

router.get('/deseados', userControllers.wishList);



module.exports = router;