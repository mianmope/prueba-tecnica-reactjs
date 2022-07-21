import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './componentes/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clases from './componentes/Clases';
import Reproductor from './componentes/Reproductor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
    <div className='web-header'>
        
        <img src = "https://www.cicloindoor.com/themes/shared/images/logo-big.png" alt ="" />
        
    </div>
  
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<App />}></Route>
          <Route  path='/clases' element={<Clases />}></Route>
          <Route  path='/reproductor' element={<Reproductor />}></Route>
          <Route  path='*' element={<h1>Not Found</h1>}></Route>
        </Routes>
    </BrowserRouter>
  </>
   
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
