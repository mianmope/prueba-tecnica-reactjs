import React, { useState, useEffect } from "react";
import "../estilos/Reproductor.css";
import {useNavigate } from "react-router-dom";
import * as utils from "../utils/metodos";
function Reproductor() {
    const [datosClase, setDatosClase] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setDatosClase(utils.getLocalStorage("clase"));
    }, []);

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
            <div className="reproductor">5</div>
        </>
    );
}
export default Reproductor;
