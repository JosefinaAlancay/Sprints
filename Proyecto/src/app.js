const express = require("express");
const path = require('path'); 

const productRoutes = require('../src/routes/productRoutes');
const userRoutes = require('../src/routes/userRoutes');

const app = express();


// Configura el directorio de vistas
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'products'),
    path.join(__dirname, 'views', 'users')
]);

// Implementar ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Implementar rutas
app.use('/', productRoutes);
app.use('/', userRoutes);

app.listen(3008, () => {
    console.log("Servidor Corriendo en el puerto 3008");
});

