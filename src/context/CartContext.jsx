import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const itemAdded = {...item, cantidad};

        const newCart = [...cart];
        const isInCart = newCart.find((product) => product.id === itemAdded.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart)
    }

    const amountInCart = () => {
        return cart.reduce((acc, prod) => acc + Number(prod.cantidad),0);
    }

    const totalPrice = () => {
        console.log( cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0))
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const clearCart = () => {
        setCart([]);
    }


    return(
        <CartContext.Provider value={{
            cart, 
            setCart,
            addToCart,
            amountInCart,
            totalPrice,
            clearCart
            }}>
            {children}
        </CartContext.Provider>


    )
}

export default CartProvider  