import React, { useState, useEffect } from "react";
import "../estilos/Subscripcion.css";
import {Input } from "reactstrap";


function Subscripcion() {
   

    return (
        <>
            <div className="contenedor">
                <h3>SUSCRÍBETE</h3>  
                <div className="containerAutomatica">
                    <Input
                        type="checkbox"
                    ></Input>
                    <p>Autorenovar automáticamente</p>
                </div>
                <div className="containerSubs">
                    <div><h3>1 minuto</h3></div>
                    <div><h3>5 minutos</h3></div>
                    <div><h3>10 minutos</h3></div>
                </div>
            </div>
            
        </>
    );
}
export default Subscripcion;
