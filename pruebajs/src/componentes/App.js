import React from "react";
import { Link } from "react-router-dom";

import "../estilos/App.css";

import * as utils from "../utils/metodos";

import useTraining from "../hooks/useTraining";
import * as cte from "../utils/constantes";

function App() {
    const { profile, training, instructor, playlist, setPlaylist } = useTraining();

    if (!profile) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={profile.avatar} alt="" />
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-center text-light">
                        <h1>{profile.name}</h1>
                        <p>Valencia,Spain</p>
                    </div>
                </div>
                <hr className="text-light" />
                <div className="row">
                    <h1 className="col-4 text-center text-light"> {profile.level}</h1>
                    <h1 className="col-4 text-center text-light"> {profile.perseverance}</h1>
                    <h1 className="col-4 text-center text-light"> {profile.total_points}</h1>
                </div>
                <div className="row">
                    <div className="col-4 text-center text-light"> NIVEL</div>
                    <div className="col-4 text-center text-light"> CONSTANCIA</div>
                    <div className="col-4 text-center text-light"> PUNTOS</div>
                </div>
                <hr className="text-light" />

                <div className="cont">
                    <div className="contenedorEstadisticas">
                        <div className="itemEstadisticas">
                            <button type="button" className="btn-amarillo btn-circle btn-xl">
                                {" "}
                                {profile.stamina_points}
                            </button>
                        </div>
                        <div className="itemEstadisticas">
                            <button type="button" className="btn-rojo btn-circle btn-xl">
                                {" "}
                                {profile.strength_points}
                            </button>
                        </div>
                        <div className="itemEstadisticas">
                            <button type="button" className="btn-verde btn-circle btn-xl">
                                {" "}
                                {profile.flexiblity_points}
                            </button>
                        </div>
                        <div className="itemEstadisticas">
                            <button type="button" className="btn-azul btn-circle btn-xl">
                                {" "}
                                {profile.mind_points}
                            </button>
                        </div>
                        <div className="itemEstadisticas text-center text-light">Resistencia</div>
                        <div className="itemEstadisticas text-center text-light">Fuerza</div>
                        <div className="itemEstadisticas text-center text-light">Flexibilidad</div>
                        <div className="itemEstadisticas text-center text-light">Mente</div>
                    </div>
                </div>

                <hr className="text-light" />
                <div className="row">
                    <h5 className="col-6 text-left text-light"> ÚLTIMAS CLASES</h5>

                    <div className="col-6 text-end text-light">
                        <button type="button" className="btn-naranja">
                            <Link to="/clases">VER TODAS</Link>
                        </button>
                    </div>
                </div>

                <div className="row">
                    {training.slice(0,cte.NUM_ULTIMAS_CLASES_VISUALIZADAS).map((item) => (
                        <div key={item.id} className="columnasInfo col-4 text-light">
                            <Link
                                onClick={() => {
                                    setPlaylist([...playlist, item]);
                                }}
                                to={`/reproductor`}
                            >
                                <div className="row">
                                    <div className="col-6 text-left text-light">
                                        <img
                                            src="https://www.cicloindoor.com/themes/shared/images/logo-big.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="col-6 text-center text-light">
                                        <p>{utils.obtenerFechaCompleta(item.published)}</p>
                                    </div>
                                </div>
                                <div className="row info-clases">
                                    <h5>{item.name}</h5>
                                    <p>
                                        {
                                            utils.getInstructorById(instructor, item.instructor_id)
                                                .name
                                        }
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
