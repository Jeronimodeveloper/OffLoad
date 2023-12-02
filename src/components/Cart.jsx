import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
    <div className= "container">
        <h1 className="">CARRITO</h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.titulo}</h2>
                    <p>Precio por unidad: $ {prod.precio}</p>
                    <p>Precio total: $ {prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                </div>
            ))
        }
    </div>
    )
}

export default Cart
