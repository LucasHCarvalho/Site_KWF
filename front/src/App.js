import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NovoPiloto from './Components/NovoPiloto';
import NotFound from './Components/NotFound';
import EditarPiloto from './Components/EditarPiloto';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>          
          <Route path="criar" element={<NovoPiloto/>}/>     
          <Route path="/editar/:id" element={<EditarPiloto/>}/>     
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;