import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './SpinnerComponent.css';

const SpinnerComponent = () => {
  return (
    <div className='spinner-container'>
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      <p>CARGANDO, aguarde un momento...</p>
    </div>
  )
}

export default SpinnerComponent