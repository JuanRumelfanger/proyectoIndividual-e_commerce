const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userController');

router.get('/login', userControllers.login);
router.post('/login',userControllers.seasion)

router.get('/register', userControllers.register);
router.post('/register', userControllers.addUser);

router.get('/carrito', userControllers.trolley);

router.get('/deseados', userControllers.wishList);



module.exports = router;