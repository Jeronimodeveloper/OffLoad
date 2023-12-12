import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = async (data) => {
        try {
            const pedido = {
                cliente: data,
                productos: cart,
                total: totalPrice()
            };

            const pedidosRef = collection(db, "pedidos");

            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            clearCart();
        } catch (error) {}
    };

    if (pedidoId) {
        return (
            <div className="d-flex flex-column text-center pt-5">
                <h2>Tu compra ha sido realizada con éxito!</h2>
                <p>Tu número de pedido es: <b>{pedidoId}</b></p>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-center">CHECKOUT</h1>
            <form onSubmit={handleSubmit(comprar)} className="col-md-4 border rounded-4 d-flex flex-column p-5 mx-auto">
                <input type="text" placeholder="Ingresar Nombre" {...register("nombre", { required: "Este campo es obligatorio" })} className={`m-1 border rounded-2 p-2 ${errors.nombre ? 'border-danger' : ''}`} />
                {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}

                <input type="email" placeholder="Ingresar e-mail" {...register("email", { required: "Este campo es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Correo electrónico inválido" } })} className={`m-1 border rounded-2 p-2 ${errors.email ? 'border-danger' : ''}`} />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}

                <input type="phone" placeholder="Ingresar telefono" {...register("telefono", { required: "Este campo es obligatorio" })} className={`m-1 border rounded-2 p-2 ${errors.telefono ? 'border-danger' : ''}`} />
                {errors.telefono && <span className="text-danger">{errors.telefono.message}</span>}

                <button type="submit" className="mt-3 border rounded-2 p-2 bg-black text-white">COMPRAR</button>
            </form>
        </>
    );
};

export default CheckOut;
