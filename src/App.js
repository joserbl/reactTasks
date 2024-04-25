import React, { useState } from 'react';
import './App.css';
import FccLogo from './components/fccLogo';
import ListaTareas from './components/listaTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <FccLogo />
      <div className='tareas-lista-principal'>
        <h1>Things to do</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
