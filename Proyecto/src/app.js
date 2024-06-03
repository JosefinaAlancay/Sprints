const express = require("express");
const path = require('path');
const bodyParser = require ('body-parser');
const methodOverride = require('method-override');
const port= 3008;
const db = require('./database/models')
//Importar rutas
const productRoutes = require('../src/routes/productRoutes');
const userRoutes = require('../src/routes/userRoutes');
const mainRoutes = require('../src/routes/mainRoutes');

const app = express();

// Configura el directorio de vistas
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'products'),
    path.join(__dirname, 'views', 'users')
]);

// Implementar EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Configurar Cookies y Sesiones
require('./middlewares/cookieMiddleware')(app);

//method-override
app.use(methodOverride('_method'));

// Implementar rutas
app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Servidor Corriendo en http://localhost:${port}`);
    db.sequelize.sync({force:true});
});
 