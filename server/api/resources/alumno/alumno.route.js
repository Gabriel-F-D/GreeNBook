const express = require('express');
const alumnoRouter = express.Router();

const log = require('./../../../utils/logger')
const alumnoController = require('./alumno.controller')

const validacion = require('./alumno.validate').validarDataDelAlumno

alumnosRouter.get('/', validacion, async(req,res) => {
    try {
        const alumnos = await alumnoController.getAlumnos()
        if(!alumnos){
            res.status(204).send('No hay alumnos cargados')
            return
        } 
        res.json({
            message: 'Se enviaron los alumnos',
            data: alumnos
        })
        log.info('Se enviaron todos los alumnos')
    } catch (error) {
        log.error(`Ocurrio un error [${error}]`)
        res.status(500).send('Ocurrio un error. Intentelo nuevamente')
    }
})

module.exports = alumnoRouter 
