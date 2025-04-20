import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import React from'react'

function app(){
   return (
    <div>
      <h1>hii!............................. </h1>
      <h1>welcome to my TURF management App</h1>
      <img src='{require(../img/image1.jpeg)}' alt="" />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    
   )
}

export default app;
