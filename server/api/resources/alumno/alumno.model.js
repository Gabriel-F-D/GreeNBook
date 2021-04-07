const mongoose = require('mongoose')

const alumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Alumno debe tener un nombre']
    },
    apellido: {
        type: String,
        required: [true, 'Alumno debe tener un apellido']
    },
    dni: {
        type: Number,
        required: [true, 'Si no tiene dni lo fletamos']
    }
})

module.exports = mongoose.model('alumno', alumnoSchema)