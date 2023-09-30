const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const mainRoutes = require('./src/routes/main')
const productsRouters = require('./src/routes/products');
const userRoutes = require('./src/routes/user');

//Configuro validaciones
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(
  session({
    secret: 'Secreto',
    resave: false,
    saveUninitialized: true,
  }),
);

//Configuro ejs
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Configuro rutas raiz
app.use('/', mainRoutes);
app.use('/product', productsRouters);
app.use('/users', userRoutes);

app.use(express.static('public'));
//Levanto el servidor

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})  