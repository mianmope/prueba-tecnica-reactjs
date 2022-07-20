

export function obtenerFecha(tiempo){
    var fecha = new Date(tiempo);
    var fechaFormateada = fecha.toLocaleDateString('es-es',{day:"numeric", month:"short", year:"numeric"});

    return fechaFormateada;
  }
export function getInstructorById (datosInstructors, id){
    
    var obj;
    datosInstructors.map(item => {
      if(id === item.id){
        obj = item;
      } 
    })
    return obj != null ? obj: "";
}

export function setLocalStorage(clave, valor){

 try{
    window.localStorage.setItem(clave, JSON.stringify(valor));
  }
  catch(error){
    console.error(error);
  }
}

export function getLocalStorage(clave){

  try{
     return JSON.parse(window.localStorage.getItem(clave));
   }
   catch(error){
     console.error(error);
   }
}
