import React, { useState, useEffect} from "react";
import "../estilos/Reproductor.css";
import {useNavigate } from "react-router-dom";
import * as utils from "../utils/metodos";
import ReactPlayer from "react-player";
import video from '../assets/cuentaAtras.mp4';
import * as cte from "../utils/constantes";

function Reproductor() {
    const [datosClases, setDatosClases] = useState([]);
    const [datosClasesNoCompletadas, setdatosClasesNoCompletadas] = useState([]);
    const navigate = useNavigate();
    var clase = datosClases;

    useEffect(() => {
        setDatosClases(utils.getLocalStorage("clase"));
        setdatosClasesNoCompletadas(utils.getLocalStorage("clase"));
    }, []);
    
    const videoCompletado = () =>{
        console.log("Completado Tamaño es : " + datosClasesNoCompletadas.length);
        var video = document.getElementById("video");
        if(datosClasesNoCompletadas.length >= 1){
          
            setdatosClasesNoCompletadas(datosClasesNoCompletadas.shift());
            console.log("Completado Tamaño es : " + datosClasesNoCompletadas.length);
            var video = document.getElementById("video");
            video.setAttribute("progressInterval",0);
            obtenerClaseReproducir();
            video.play();
        }
        else{
          
            console.log("Completado todos videos");
            console.log("Completado Tamaño es : " + datosClasesNoCompletadas.length);
            navigate(-1);
        }
   
        
       
    }
    const volverAtras = () =>{
        document.getElementById("video").setAttribute("playing",false);
        console.log("Atras");
        navigate(-1);
    }
    
    const obtenerClaseReproducir = () =>{
        if(datosClasesNoCompletadas.length >= 1){
            console.log("Entro Al if");
            clase = datosClasesNoCompletadas[cte.PARAM_CERO.toString()];
            console.log(JSON.stringify(clase));
        }
        else{
            console.log(" No Entro Al if");
            clase = datosClases;
        }
    }
    
    obtenerClaseReproducir();
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
                <video id="video" src={video} autoPlay width="100%" height="auto" onEnded={videoCompletado}/>
            </div>
            
        </>
    );
}
export default Reproductor;
