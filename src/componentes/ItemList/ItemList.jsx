import Item from "../Item/Item"
import { Box } from '@mui/system';

const ItemList = ({ productos }) => {
  return (
    <Box 
      sx={{ 
        display: 'grid', 
        gap: 2, 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } 
      }}
    >
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </Box>
  )
}

export default ItemList
