const express = require('express')
const path = require('path')

//Inicializaciones
const app = express()

//Configuraciones
app.set('port', 3000)

////Middlewares

//Rutas
app.use(express.static(path.join(__dirname, 'publico')))

//Iniciar el servidor
app.listen(app.get('port'), () =>
{
    console.log(`App iniciada en el puerto ${app.get('port')}`)
})