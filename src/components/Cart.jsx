import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

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
                <div key={prod.id} className="col-md-4 border rounded-4 d-flex flex-column ps-3 pt-3 mb-4">
                    <h3 className="text-decoration-underline text-center pb-4">{prod.nombre}</h3>
                    <p>- Cantidad: {Number(prod.cantidad)}</p>
                    <p>- Precio por unidad: $ {prod.precio}</p>
                    <p>- Precio total: $ {prod.precio * prod.cantidad}</p>
                </div>
            ))
        }
        <h3 className="border rounded-4 p-3" > PRECIO FINAL: $ {totalPrice()}</h3>
        <Link to="/checkout" className='Option btn bg-black border-0 text-white px-3 h-100 mt-4 mb-3'>Completar Compra</Link>
        <button onClick={handlerClear} className='Option btn bg-danger border-0 text-white px-3 h-100 mt-2 mb-1 btn-sm'>Vaciar carro</button>
    </div>
    )
}

export default Cart
