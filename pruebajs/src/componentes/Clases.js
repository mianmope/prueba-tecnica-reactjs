import React from "react";
import '../estilos/Clases.css';
function Clases() {

    return (
        <div className="contenedorClase">
            <div className="item-top">
                <h6>Clase nombre</h6>
                <p>Nombre profesor</p>
            </div>
            <div className="item-bot">
                <div className="item-nivel">
                    <p>Nivel</p>
                    <p>...</p>

                </div>
                <div className="item-fecha">
                    <p>12 Jun</p>
                </div>
                <div className="item-tiempo">
                    <p>Duración 52'</p>
                </div>
            </div>
        </div>
    )
}
export default Clases;