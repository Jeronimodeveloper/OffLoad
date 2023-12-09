import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const handlerClear = () => {
        clearCart();
    }
    return (
    <div className= "container d-flex flex-column align-items-center">
        <h1 className="">CARRITO</h1>
        {
            cart.map((prod) => (
                <div key={prod.id} className="col-md-4 mb-4 border rounded-4 d-flex flex-column ps-3 pt-3">
                    <h3 className="text-decoration-underline text-center pb-2">{prod.nombre}</h3>
                    <p>Precio por unidad: $ {prod.precio}</p>
                    <p>Precio total: $ {prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {Number(prod.cantidad)}</p>
                    <br />
                </div>
            ))
        }
        <h3> PRECIO FINAL: $ {totalPrice()}</h3>
        <button onClick={handlerClear} className='Option btn bg-black border-0 text-white ms-4 px-3 h-100 mt-3 mb-3'>Vaciar carro</button>
    </div>
    )
}

export default Cart
