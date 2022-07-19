import React,{useState, useEffect} from "react";
import { getDatosApi } from "./api/perfil";
import './App.css';
import { obtenerFecha } from "./utils/metodos";


function App() {
 
  const[datosProfile, setDatosProfile] = useState([]);
  const[datosTraining, setDatosTraining] = useState([]);
  const[datosInstructors, setDatosInstructors] = useState([]);

  useEffect(() => {
    getDatosApi().then((data) => {
      setDatosProfile(data.profile);
      setDatosTraining(data.training_classes.slice(0,6));
      setDatosInstructors(data.instructors);
    });
   

  },[]);

 
  function nombreInstructor (id){
    var name = "UnKnown";
    datosInstructors.map(item => {
      if(id == item.id){
        name = item.name;
        return name;
      }
        
    })
    return name;
  }
  const verTodos = ()=>{
    console.log("PULSADO");

  }

  return (
    <>
      <div style={{background: "#151515"}}>
        <div className="Web-header">
            <img src = "https://www.cicloindoor.com/themes/shared/images/logo-big.png" />
        </div>
        <div className="container">
        
          <div className="row">

            <div className="col-4">
              <img src = {datosProfile.avatar} />
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

          <div className="row">
            <div className="col-3 text-center text-light">
              <button type="button" className="btn-amarillo btn-circle btn-xl"> {datosProfile.stamina_points}</button>
            </div>
            <div className="col-3 text-center text-light">
              <button type="button" className="btn-rojo btn-circle btn-xl"> {datosProfile.strength_points}</button>
            </div>
            <div className="col-3 text-center text-light">
              <button type="button" className="btn-verde btn-circle btn-xl"> {datosProfile.flexiblity_points}</button>
            </div>
            <div className="col-3 text-center text-light">
              <button type="button" className="btn-azul btn-circle btn-xl"> {datosProfile.mind_points}</button>
            </div>
           
          </div>

          <div className="row">
            <div className="col-3 text-center text-light"> Resistencia</div>
            <div className="col-3 text-center text-light"> Fuerza</div>
            <div className="col-3 text-center text-light"> Flexibilidad</div>
            <div className="col-3 text-center text-light"> Mente</div>
          </div>
          <hr className="text-light" />

          <div className="row">
            <h5 className="col-6 text-left text-light"> ÚLTIMAS CLASES</h5>
            <div className="col-6 text-end text-light">
              <button type="button" className="btn-naranja" onClick={verTodos}> VER TODAS</button>
            </div>
          </div>

          <div className="row">
            {
              datosTraining.map(item =>(
                <div key={item.id} className="columnasInfo col-4 text-light ">
                  <div key = {item.id} className="row">
                    <div className="col-6 text-left text-light">
                      <img src = "https://www.cicloindoor.com/themes/shared/images/logo-big.png" />
                    </div>
                    <div className="col-6 text-center text-light">
                      <p>{obtenerFecha(item.published)}</p>
                    </div>
                  
                  </div>
                  <div className="row info-clases">
                    <h5>{item.name}</h5>
                    <p>{nombreInstructor(item.instructor_id)}</p>
                  </div>
              </div>
              ))
              
            }
       
          </div>
        
        </div>
     
      </div>
    </>
    
  );
}

export default App;
