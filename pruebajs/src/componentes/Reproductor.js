import React,{useState, useEffect} from "react";
import '../estilos/Reproductor.css';
import {Link} from "react-router-dom";
import * as utils from "../utils/metodos";
function Reproductor() {

    const[datosClase, setDatosClase] = useState([]);

    useEffect(() => {
            setDatosClase(utils.getLocalStorage("clase"));
      },[]);

    return (
        <>
            <div className="d-flex align-items-center" >
                <div className="m-5" >
                    <Link to="/">
                        <button type="button" className="btn-negro btn-circle btn-xl"> {"<<"} </button>
                    </Link>
                    
                </div>

                <div className="tituloClase ">
                    <h2>{datosClase.name}</h2>  
                    <h5>{datosClase.instructor_id}</h5>
                </div>
            </div>
          
            <div className="reproductor">
                5
            </div>
          
        </>
        
           
      
    )
}
export default Reproductor;