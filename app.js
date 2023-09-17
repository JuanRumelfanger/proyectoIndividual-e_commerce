const express = require('express');
const app = express();


//Configuro ejs
 
app.set('view engine', 'ejs');


//app.use('/', productsController)

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})