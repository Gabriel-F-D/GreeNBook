const mongoose = require('mongoose')

const materiaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'La materia debe tener un nombre']
    }
})