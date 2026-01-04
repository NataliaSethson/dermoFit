import { createContext, useState, useMemo } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const agregarAlCarrito = (item) => {
        const cantidad = Number(item.cantidad) || 1

        setCart(prevCart => {
            if (prevCart.some(prod => prod.id === item.id)) {
                return prevCart.map(prod =>
                    prod.id === item.id
                        ? { ...prod, cantidad: prod.cantidad + cantidad }
                        : prod
                )
            }
            return [...prevCart, { ...item, cantidad }]
        })
    }


    const totalCantidad = cart.reduce(
        (acc, prod) => acc + prod.cantidad,
        0
    )

    const totalCompra = cart.reduce(
        (acc, prod) => acc + prod.cantidad * prod.price,
        0
    )


    const isInCart = (id) => cart.some(prod => prod.id === id)

    const vaciarCarrito = () => setCart([])

    const eliminarDelCarrito = (id) =>
        setCart(prev => prev.filter(prod => prod.id !== id))

    const restarCantidad = (id) => {
        const nuevoCarrito = cart.map((prod) => {
            if (prod.id === id) {
                return { ...prod, cantidad: prod.cantidad - 1 };
            }
            return prod;
        }).filter((prod) => prod.cantidad > 0);

        setCart(nuevoCarrito);
    };

    const sumarUnidad = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito,
            isCartOpen,
            setIsCartOpen,
            restarCantidad,
            sumarUnidad
        }}>
            {children}
        </CartContext.Provider>
    )
}
