const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

//template engine
app.set('view engine', 'ejs'); // establece ejs como el modelo de plantillas 
app.set('views', path.join(__dirname, 'src/views')); // le deci a ejs que las plantillas estan en la carpeta views

// Requeriendo Rutas 
const mainRutas = require('./src/routes/main')

// Implementando Rutas 
app.use('/', mainRutas);

// Error 404

app.use((req,res) => {
    res.status(404).render('error')
})



// Escuchando Servidor 
app.listen(3003,() => console.log('Servidor corriendo en el puerto 3003')) 