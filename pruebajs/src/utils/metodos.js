import * as cte from "./constantes";

/*
    obtenerFechaCompleta

    @param tiempo : TimeStamp en segundos

    @return fechaFormateada: fecha con formato (DD Month YYYY)
*/
export const obtenerFechaCompleta = (tiempo) =>{
    var fecha = new Date(tiempo);
    var fechaFormateada = fecha.toLocaleDateString("es-es", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return fechaFormateada;
}

/*
    obtenerFechaReducida

    @param tiempo : TimeStamp en segundos

    @return fechaFormateada: fecha con formato (DD Month)
*/
export const obtenerFechaReducida = (tiempo) =>{
    var fecha = new Date(tiempo);
    var fechaFormateada = fecha.toLocaleDateString("es-es", {
        day: "numeric",
        month: "short",
    });

    return fechaFormateada;
}

/*
    obtenerMinutosClase

    @param segundos : Duracion de la clase en segundos

    @return Entero duracion de la clase en minutos
*/
export const obtenerMinutosClase = (segundos) =>{
    return Math.ceil(segundos / cte.RELACION_SEGUNDOS_MINUTOS);
}

/*
    getInstructorById

    @param instructors : Array con informacion de instructores
    @param id: Identificador de instructor

    @return String nombre del instructor
*/
export const getInstructorById = (instructors, id) =>{
    return instructors.filter((instructor) => instructor.id === id).shift();
}

/*
    videoCompletado

    @param videosCompletados : Array con informacion de la clase completada
    @param id: Identificador de la clase

    @return Boolean que indica si se ha finalizado o no un clase dada por su id
*/
export const videoCompletado = (videosCompletados, id) =>{
    return videosCompletados.filter((video) => video.id === id).length > 0 ? false : true;
}

/*
    setLocalStorage

    @param clave : identificador de clave en la LocalStorage
    @param valor: objeto a agregar en la LocalStorage
 
*/
export const setLocalStorage = (clave, valor) =>{
    try {
        window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
        console.error(error);
    }
}

/*
    getLocalStorage

    @param clave : identificador de clave en la LocalStorage
   
    @return Object objeto almacenado en la LocalStorage
 
*/
export const getLocalStorage = (clave) =>{
    try {
        return JSON.parse(window.localStorage.getItem(clave));
    } catch (error) {
        console.error(error);
    }
}

