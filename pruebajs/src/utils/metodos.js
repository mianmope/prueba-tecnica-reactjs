export function obtenerFecha(tiempo){
    var fecha = new Date(tiempo);
    var fechaFormateada = fecha.toLocaleDateString('es-es',{day:"numeric", month:"short", year:"numeric"});

    return fechaFormateada;
  }