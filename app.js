const express = require('express');
const app = express();

const productsController = require('./controllers/productoControllers');

//Configuro ejs
app.set('view engine', 'ejs');


//app.use('/', productsController);
app.use(express.static('public'));
//Levato el servidor

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})