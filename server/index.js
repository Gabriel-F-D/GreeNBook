const express = require('express')
const mongoose = require('mongoose')

const app = express()
const log = require('./utils/logger')

const alumnosRoute = require('./api/resources/alumno/alumno.route')

// Coneccion a base de datos
mongoose.connect('mongodb://127.0.0.1:27017/greenbook', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    logger.error('Connection to mangodb failed');
    process.exit(1);
})

app.use(express.json())

app.use('/api/alumnos', alumnosRoute)

app.listen(4000, () => {
    log.info("Server listening on port 4000")
})