require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan');
const mongoose = require('mongoose')
//Inicializaciones



//importing routes
const indexRoutes = require('./routes/index.js');


//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'))

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//se encarga de entender los datos que envia un form desde html
app.use(express.json());


//dbconection
const user = 'passContab';
const password = 'hJyyuHblQAHhRZ8B';
const nameDB = 'db_contablito'
const URI = `mongodb+srv://passContab:${password}@cluster0.2l9dg.mongodb.net/${nameDB}?retryWrites=true&w=majority`

mongoose.connect(URI, {useNewUrlParser: true} )
.then( console.log('DB connected') )
.catch( err => console.error() )

//Rutas
app.use('/', indexRoutes);
app.use('/index2', indexRoutes);
app.use('/addProd', require('./routes/products'));
app.use('/addTrans', require('./routes/transactions'));

//Iniciar el servidor
app.listen(app.get('port'), () =>
{
    console.log(`App iniciada en el puerto ${app.get('port')}`)
});