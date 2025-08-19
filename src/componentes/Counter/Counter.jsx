import React, { useState } from 'react'

const Counter = ({cantidad,setCantidad,max,handleAgregar }) => {

   
   const handleSumar =()=>{
    cantidad < max && setCantidad (cantidad +1 )}

    const handleRestar=()=>{
        cantidad > 1 && setCantidad (cantidad -1)
    } 
      
  return (
    <div>
        <button onClick={handleSumar} className='btn btn-dark'>+</button>
        <span className='mx-4'>{cantidad}</span>
        <button onClick={handleRestar} className='btn btn-dark'>-</button>
        <br></br>
        <br></br>
        <button onClick={handleAgregar}className='btn btn-dark'> AGREGAR AL CARRITO</button>
    </div>
  )
}

export default Counter