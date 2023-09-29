const express = require('express');
const app = express();
const path = require('path')

const mainRoutes = require('./src/routes/main')
const productsRouters = require('./src/routes/products');
const userRoutes = require('./src/routes/user');

//Configuro ejs
app.set('view engine', 'ejs');

//Configuro rutas raiz
app.use('/', mainRoutes);
app.use('/product', productsRouters);
app.use('/users', userRoutes);

app.use(express.static('public'));
//Levanto el servidor

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})  