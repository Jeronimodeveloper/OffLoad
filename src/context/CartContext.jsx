import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext()

const initalCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([initalCart]);

    const addToCart = (item, amount) => {
        const itemAdded = {...item, amount};

        const newCart = [...cart];
        const isInCart = newCart.find((producto) => producto.id === itemAdded.id);

        if (isInCart) {
            isInCart.amount += amount;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart)
    }

    const amountInCart = () => {
        return cart.reduce((acc, prod) => acc + Number(prod.amount, 0));
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.amount, 0)
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