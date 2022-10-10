import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './components/home';
import Vehiculos from './components/vehiculos';



function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h1 className='title'>VENTA DE AUTOS EASY-CAR</h1>
          <Link to="home" className='ppal'> Home</Link>
          <Link to="vehiculos" className='ppal'>Vehiculos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Vacio</div>} />
          <Route path="home" element={<Home/>} />
          <Route path="vehiculos" element={<Vehiculos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
