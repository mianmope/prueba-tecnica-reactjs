import React, { useState, useEffect } from "react";
import "../estilos/Reproductor.css";
import {useNavigate } from "react-router-dom";
import * as utils from "../utils/metodos";
import * as cte from "../utils/constantes";

function Reproductor() {
    var contador = cte.CONTADOR_VIDEO;
   
    const [datosClase, setDatosClase] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setDatosClase(utils.getLocalStorage("clase"));
    }, []);
    
    const actualizarTiempo = () =>{
        var objContador = document.getElementById('contador');
        objContador.innerHTML = `${contador}`;
        if(contador!=0)
            contador -=1;
    }
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="m-5">
                    <button type="button" className="btn-negro btn-circle btn-xl" onClick={() => navigate(-1)}>
                        {"<<"}
                    </button>
            
                </div>
                <div className="tituloClase ">
                    <h2>{datosClase.name}</h2>
                    <h5>{datosClase.instructor_id}</h5>
                </div>
            </div>
            <div id="contador" className="reproductor">{setInterval(actualizarTiempo,1000)}</div>
        </>
    );
}
export default Reproductor;
