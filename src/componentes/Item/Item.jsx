
import './Item.css'
import { Link } from 'react-router-dom'


const Item = (item) => {
  return (
    <div className='' key={item.id}>
      <div className='cardConteiner'>
        <h2 className='nameTitle'>{item.name}</h2>
        <img src={item.img} className='imgItem' />
        <br></br>
        <p className='precio'>
          {item.price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>

        <Link to={`/detail/${item.id}`} className='btn btn-dark' size="sm">VER MÁS</Link>

      </div>
    </div>

  )
}

export default Item