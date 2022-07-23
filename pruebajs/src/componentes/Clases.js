import React,{useState, useEffect} from "react";
import { getDatosApi } from "../api/perfil";
import '../estilos/Clases.css';
import * as utils from "../utils/metodos";
import {FormGroup, Input} from "reactstrap";
import {Link, Route} from "react-router-dom";
function Clases() {

    const[datosTraining, setDatosTraining] = useState([]);
    const[datosInstructors, setDatosInstructors] = useState([]);
    const[checkboxSeleccionado, setcheckboxSeleccionado] = useState([]);
   
    useEffect(() => {
        getDatosApi().then((data) => {
            setDatosTraining(data.training_classes);
            setDatosInstructors(data.instructors);
        });
      },[]);

    const reproducirAutomaticamente = () =>{
        //var array = JSON.parse( JSON.stringify(datosTraining));
        //console.log(array);
        var clasesFiltradas = datosTraining.filter((elemento) =>{if(checkboxSeleccionado.includes(elemento.id.toString())){return elemento}});
        clasesFiltradas.map(elemento => {elemento.instructor_id = utils.getInstructorById(datosInstructors,elemento.instructor_id).name});
        utils.setLocalStorage("clase", clasesFiltradas);
    }
    const cambiarCheckBox = (e) =>{
        var aux = null;
        if(checkboxSeleccionado.includes(e.target.value)){
            aux = checkboxSeleccionado.filter(elemento=> elemento!==e.target.value);
        }
        else{
            aux = checkboxSeleccionado.concat(e.target.value);
        }
        setcheckboxSeleccionado(aux);
    }
    
    const eventClase = (clase, name) =>{
        var claseCopia = Object.assign({},clase);
        claseCopia.instructor_id = name;
        utils.setLocalStorage("clase", claseCopia);
        
      }
    return (
        
        <>
            <Link to="/reproductor">
                <div className="botonReproducir">
                    
                    <button disabled = {checkboxSeleccionado.length > 0 ? false : true} onClick={reproducirAutomaticamente}>REPRODUCIR AUTOMÁTICAMENTE</button>
                                
                </div>
            </Link>
           

            <div className="contenedor">
            
                <div className="contenedorTodasClases">
                {
                    datosTraining.map( item =>(
                        
                            <div key={item.id} onClick={() => eventClase(item, utils.getInstructorById(datosInstructors, item.instructor_id).name)}>
                                <div id="contClase" className="contenedorClase" style={{background: "url("+item.image+")", backgroundSize: "cover", backgroundPosition: "center"}} >
                                    <div className="item-top">
                                        <div className="row m-0 p-0">
                                            <div className="col-2 m- p-0" >
                                                <Input type="checkbox" value={item.id} onChange={cambiarCheckBox}></Input>
                                            </div>
                                            <div className="col-10 m-0 p-0">
                                                <h6>{item.name}</h6>
                                            </div>
                                            <div className="row">
                                            <p>{utils.getInstructorById(datosInstructors, item.instructor_id).name}</p>
                                        </div>
                                        </div>
                                                        
                                        
                                    </div>
                                    <Link to="/reproductor">
                                        <div className="contenedorNavegacion">
                                            enlace
                                        </div>
                                    </Link>
                                    <div>
                                        <button className="btnCompletada">Completada</button>
                                    </div>
                                    
                                    
                                    <div className="item-bot">
                                        <div className="item-nivel">
                                            <div className="nivel">
                                                <p>Nivel</p>
                                            </div>
                                        
                                            <div className="niveles">
                                                <FormGroup>
                                                
                                                    <Input  type="radio" value= "1" defaultChecked ={item.level === 1 ? true : false} disabled></Input>
                                                    <Input  type="radio" value= "2" defaultChecked ={item.level === 2 ? true : false} disabled></Input>
                                                    <Input  type="radio" value= "3" defaultChecked ={item.level === 3 ? true : false} disabled></Input>
                                                
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="item-fecha">
                                            <p>{utils.obtenerFechaReducida(item.published)}</p>
                                        </div>

                                        <div className="item-tiempo">
                                            <p>{"Duración " + utils.obtenerMinutosClase(item.duration) + "'"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                    ))
                }
                </div>
            </div> 
        </>

    )
}
export default Clases;