import { createContext, useState} from 'react';


export const CartContext = createContext()

const initalCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([initalCart]);

    const addToCart = (item, amount) => {
        const itemAdded = {...item, amount};

        const newCart = [...cart];
        const isInCart = newCart.find((producto) => producto.id === itemAdded.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart)
        localStorage.setItem()
    }

    const mountInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.amount, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.amount, 0)
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    return(
        <CartContext.Provider value={{
            cart, 
            addToCart,
            mountInCart,
            totalPrice,
            clearCart
            }}>
            {children}
        </CartContext.Provider>


    )
}

export default CartProvider  