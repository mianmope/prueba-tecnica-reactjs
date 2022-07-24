import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { TrainingProvider } from "./context/TrainingProvider";

import Layout from "./layout/Layout";

import App from "./componentes/App";
import Clases from "./componentes/Clases";
import Reproductor from "./componentes/Reproductor";
import Subscripcion from "./componentes/Subscripcion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <BrowserRouter>
            <TrainingProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<App />}></Route>
                        <Route path="/clases" element={<Clases />}></Route>
                        <Route path="/reproductor" element={<Reproductor />}></Route>
                        <Route path="/subscripcion" element={<Subscripcion />}></Route>
                        <Route path="*" element={<h1>Not Found</h1>}></Route>
                    </Route>
                </Routes>
            </TrainingProvider>
        </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
