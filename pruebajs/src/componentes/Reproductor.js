import React,{useState, useEffect} from "react";
import '../estilos/Reproductor.css';
import * as utils from "../utils/metodos";
function Reproductor() {

    const[datosClase, setDatosClase] = useState([]);

    useEffect(() => {
            setDatosClase(utils.getLocalStorage("clase"));
      },[]);

    return (
        <div>
            <h2>{datosClase.name}</h2>
            <h5>{datosClase.instructor_id}</h5>
        </div>
    )
}
export default Reproductor;