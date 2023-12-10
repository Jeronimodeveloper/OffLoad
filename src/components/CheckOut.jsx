import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                clearCart();
            })
    }

    if (pedidoId) {
        return (
            <div className="d-flex flex-column text-center pt-5">
                <h2>Tu compra a sido realizada con éxito!</h2> 
                <p>Tu número de pedido es: <b>{pedidoId}</b></p>  
            </div>
        )
    }

return (
    <>
        <h1 className="text-center">CHECKOUT</h1>
            <form onSubmit={handleSubmit(comprar)} className="col-md-4 border rounded-4 d-flex flex-column p-5 mx-auto ">
                <input type="text" placeholder="Ingresar Nombre" {...register("nombre")} className="m-1 border rounded-2 p-2" />
                <input type="email" placeholder="Ingresar e-mail" {...register("email")} className="m-1 border rounded-2 p-2" />
                <input type="phone" placeholder="Ingresar telefono" {...register("telefono")} className="m-1 border rounded-2 p-2" />

                <button type="submit" className="mt-3 border rounded-2 p-2 bg-black text-white">COMPRAR</button>
            </form>
    </>
    )
}

export default CheckOut
