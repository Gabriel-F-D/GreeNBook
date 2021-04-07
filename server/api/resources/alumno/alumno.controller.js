const Alumno = require('./alumno.model')

function crearAlumno(alumno){
    return new Alumno({
        ...alumno
    }).save()

function getAlumnos(){
    return Alumno.find({})
}

function getAlumno(id){
    return Alumno.findById({id})
}
}

module.exports = {
    crearAlumno,
    getAlumno,
    getAlumnos
}