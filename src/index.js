const express = require ('express');
const app = express();
const morgan = require('morgan');


//Configuraciones
app.set('port',3000)
app.set('json spaces',2);

//middlewares

app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use ('/api/asesores',require('./routes/rutas'));

app.get('/home' , (req, res) => {
    res.send('Bienvenidos');
});


//Empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");
