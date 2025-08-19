import Item from "../Item/Item"
import { Box, grid } from '@mui/system';




const ItemList = ({productos}) => {
  
  return (
    
    <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)' }}>

    {
      productos.map( (producto)=> <Item key={producto.id}{...producto} /> )
    }

    </Box>
  )
}

export default ItemList