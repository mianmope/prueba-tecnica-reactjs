import React from "react";
import { Link } from "react-router-dom";

import "../estilos/Clases.css";

import * as utils from "../utils/metodos";

import { FormGroup, Input } from "reactstrap";

import useTraining from "../hooks/useTraining";

function Clases() {
    const { training, instructor, playlist, videosCompletados, setPlaylist } = useTraining();

    const handleChange = (item) => {
        const exists = playlist.find((i) => i.id === item.id);

        if (exists) {
            setPlaylist(playlist.filter((i) => i.id !== item.id));
        } else {
            setPlaylist([...playlist, item]);
        }
    };

    return (
        <>
            <Link to="/reproductor">
                <div className="contReproducir">
                    <div className="botonReproducir">
                        REPRODUCIR AUTOMÁTICAMENTE
                    </div>
                </div> 
             
            </Link>

            <div className="contenedor">
                <div className="contenedorTodasClases">
                    {training.map((item) => (
                        <div
                            key={item.id}
                            id="contClase"
                            className="contenedorClase"
                            style={{
                                background: "url(" + item.image + ")",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="item-top">
                                <div className="row m-0 p-0">
                                    <div className="col-2 m- p-0">
                                        <Input
                                            type="checkbox"
                                            value={item.id}
                                            onChange={() => handleChange(item)}
                                        ></Input>
                                    </div>
                                    <div className="col-10 m-0 p-0">
                                        <h6>{item.name}</h6>
                                    </div>
                                    <div className="row">
                                        <p>
                                            {
                                                utils.getInstructorById(
                                                    instructor,
                                                    item.instructor_id
                                                ).name
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                onClick={() => {
                                    setPlaylist([item]);
                                }}
                                to={`/reproductor`}
                            >
                                <div className="contenedorNavegacion">enlace</div>
                            </Link>
                            <div>
                                <button className="btnCompletada" disabled={utils.videoCompletado(videosCompletados, item.id)}>Completada</button>
                            </div>

                            <div className="item-bot">
                                <div className="item-nivel">
                                    <div className="nivel">
                                        <p>Nivel</p>
                                    </div>

                                    <div className="niveles">
                                        <FormGroup>
                                            <Input
                                                type="radio"
                                                value="1"
                                                defaultChecked={item.level === 1 ? true : false}
                                                disabled
                                            ></Input>
                                            <Input
                                                type="radio"
                                                value="2"
                                                defaultChecked={item.level === 2 ? true : false}
                                                disabled
                                            ></Input>
                                            <Input
                                                type="radio"
                                                value="3"
                                                defaultChecked={item.level === 3 ? true : false}
                                                disabled
                                            ></Input>
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="item-fecha">
                                    <p>{utils.obtenerFechaReducida(item.published)}</p>
                                </div>

                                <div className="item-tiempo">
                                    <p>
                                        {"Duración " +
                                            utils.obtenerMinutosClase(item.duration) +
                                            "'"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Clases;
