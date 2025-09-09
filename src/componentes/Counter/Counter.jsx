import './Counter.css'
import Button from 'react-bootstrap/Button';

const Counter = ({cantidad,setCantidad,max,handleAgregar }) => {

   
   const handleSumar =()=>{
    cantidad < max && setCantidad (cantidad +1 )}

    const handleRestar=()=>{
        cantidad > 1 && setCantidad (cantidad -1)
    } 
      
  return (
    <div>
      <div className='conteinerCount'>
        <button onClick={handleSumar} className='btn btn-dark'>+</button>
        <span className='mx-5'>{cantidad}</span>
        <button onClick={handleRestar} className='btn btn-dark'>-</button>
      </div>
        <br></br>
        <br></br>
        <Button onClick={handleAgregar}variant='btn btn-dark'  className='buttonAg' > AGREGAR AL CARRITO</Button>
    </div>
  )
}

export default Counter