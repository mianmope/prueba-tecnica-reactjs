import React,{useState, useEffect} from "react";
import { getDatosApi } from "../api/perfil";
import {Link} from "react-router-dom";
import '../estilos/App.css';
import * as utils from "../utils/metodos";
import * as cte from "../utils/constantes";


function App() {

  const[datosProfile, setDatosProfile] = useState([]);
  const[datosTraining, setDatosTraining] = useState([]);
  const[datosInstructors, setDatosInstructors] = useState([]);

  useEffect(() => {
    getDatosApi().then((data) => {
      setDatosProfile(data.profile);
      setDatosTraining(data.training_classes.slice(cte.PARAM_CERO,cte.NUM_ULTIMAS_CLASES_VISUALIZADAS));
      setDatosInstructors(data.instructors);
    });
   

  },[]);
 
  const eventClase = (clase, name) =>{
    clase.instructor_id = name;
    utils.setLocalStorage("clase", clase);
  }

  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-4">
            <img src = {datosProfile.avatar} alt=""/>
          </div>

          <div className="col-4 d-flex flex-column justify-content-center text-light">
            <h1>{datosProfile.name}</h1>
            <p>Valencia,Spain</p>
          </div>

        </div>
        <hr className="text-light" />
        <div className="row">
          <h1 className="col-4 text-center text-light"> {datosProfile.level}</h1>
          <h1 className="col-4 text-center text-light"> {datosProfile.perseverance}</h1>
          <h1 className="col-4 text-center text-light"> {datosProfile.total_points}</h1>
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
              <button type="button" className="btn-amarillo btn-circle btn-xl"> {datosProfile.stamina_points}</button>
            </div>
            <div className="itemEstadisticas">
            <button type="button" className="btn-rojo btn-circle btn-xl"> {datosProfile.strength_points}</button>
            </div>
            <div className="itemEstadisticas">
              <button type="button" className="btn-verde btn-circle btn-xl"> {datosProfile.flexiblity_points}</button>
            </div>
            <div className="itemEstadisticas">
             <button type="button" className="btn-azul btn-circle btn-xl"> {datosProfile.mind_points}</button>
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
            <button type="button" className="btn-naranja"><Link to='/clases'>VER TODAS</Link></button>
          </div>
        </div>

        <div className="row">
          {
            datosTraining.map(item =>(
              <div key={item.id} className="columnasInfo col-4 text-light" onClick={() => eventClase(item, utils.getInstructorById(datosInstructors, item.instructor_id).name)}>
              
                <Link to='/reproductor'>
                  <div className="row">
                    <div className="col-6 text-left text-light">
                      <img src = "https://www.cicloindoor.com/themes/shared/images/logo-big.png" alt=""/>
                    </div>
              
                    <div className="col-6 text-center text-light">
                      <p>{utils.obtenerFechaCompleta(item.published)}</p>
                    </div>
                  
                  </div>
                  <div className="row info-clases">
                    <h5>{item.name}</h5>
                    <p>{utils.getInstructorById(datosInstructors, item.instructor_id).name}</p>
                  </div>

                </Link>
              </div>
            ))
            
          }
        </div>
      </div>
    </> 
  );
}

export default App;
