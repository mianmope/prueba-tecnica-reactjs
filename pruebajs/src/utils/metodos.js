import * as cte from "./constantes";

export function obtenerFechaCompleta(tiempo) {
  var fecha = new Date(tiempo);
  var fechaFormateada = fecha.toLocaleDateString("es-es", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return fechaFormateada;
}

export function obtenerFechaReducida(tiempo) {
  var fecha = new Date(tiempo);
  var fechaFormateada = fecha.toLocaleDateString("es-es", {
    day: "numeric",
    month: "short",
  });

  return fechaFormateada;
}

export function obtenerMinutosClase(segundos) {
  return Math.ceil(segundos / cte.RELACION_SEGUNDOS_MINUTOS);
}

export function getInstructorById(datosInstructors, id) {
  var obj;
  datosInstructors.map((item) => {
    if (id === item.id) {
      obj = item;
    }
  });
  return obj != null ? obj : "";
}

export function setLocalStorage(clave, valor) {
  try {
    window.localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.error(error);
  }
}

export function getLocalStorage(clave) {
  try {
    return JSON.parse(window.localStorage.getItem(clave));
  } catch (error) {
    console.error(error);
  }
}

