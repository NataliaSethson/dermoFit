
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)


    return (
        <div>
            <Link to={"/cart"}>
                <BsCartPlus />
                <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}

export default CartWidget