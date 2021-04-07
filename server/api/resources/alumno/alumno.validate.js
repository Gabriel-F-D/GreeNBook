const Joi = require('joi')
const log = require('./../../../utils/logger')

const blueprintAlumno = Joi.object({
    nombre: Joi.string().max(100).required(),
    apellido: Joi.string().max(100).required(),
    dni: Joi.number().positive().max(10).required()
})

//Middleware
function validarDataDelAlumno(req,res,next){
    const resultado = blueprintAlumno.validate(req.body, {abortEarly:false, convert:false})
    if(!resultado.error){
        next()
    } else {
        let erroresDeValidacion = resultado.error.details.reduce((acumulador, error) => {
            return acumulador + `[${error.message}]`
        },"");
        log.warn('El siguiente alumno no páso la validacion', req.body, erroresDeValidacion)
        res.status(400).send(`El alumno en el body tiene que especificar nombre, apellido y dni. Errores en tu request: ${erroresDeValidacion}`)
    }
}

module.exports = {
    validarDataDelAlumno
}