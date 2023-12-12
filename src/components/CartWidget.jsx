import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { amountInCart } = useContext(CartContext);

  return (
    <>
      <div className = "position-relative">
        <Link to="/cart" className="text-decoration-none text-black">
            <i className = "bi bi-cart fs-4"></i>
            <span className="position-absolute start-75 translate-middle badge rounded-pill bg-danger badge-Cart-number">
            {amountInCart()}
            </span>
        </Link>
      </div>
    </>
  )
}

export default CartWidget
