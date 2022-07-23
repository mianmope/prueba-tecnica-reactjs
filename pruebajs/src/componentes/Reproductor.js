import React, { useState, useEffect} from "react";
import "../estilos/Reproductor.css";
import {useNavigate } from "react-router-dom";
import * as utils from "../utils/metodos";
import ReactPlayer from "react-player";
import video from '../assets/cuentaAtras.mp4';


function Reproductor() {
    const [datosClases, setDatosClases] = useState([]);
    const navigate = useNavigate();
    var clase = datosClases;

    useEffect(() => {
        setDatosClases(utils.getLocalStorage("clase"));
    }, []);
    
    const videoCompletado = () =>{
        console.log("Completado");
        navigate(-1);
    }
    const volverAtras = () =>{
        document.getElementById("video").setAttribute("playing",false);
        console.log("Atras");
        navigate(-1);
    }
    
    if(datosClases.length > 1){
        console.log("Entro");
        clase = datosClases.indexOf(1);
        console.log(JSON.stringify(clase));
    }

    return (
        <>
            <div className="d-flex align-items-center">
                <div className="m-5">
                    <button type="button" className="btn-negro btn-circle btn-xl" onClick={volverAtras}>
                        {"<<"}
                    </button>
            
                </div>
                <div className="tituloClase ">
                    <h2>{clase.name}</h2>
                    <h5>{clase.instructor_id}</h5>
                </div>
            </div>
            <div className="reproductor">
                <ReactPlayer id="video" url={video} playing onEnded={videoCompletado}/>
            </div>
            
        </>
    );
}
export default Reproductor;
