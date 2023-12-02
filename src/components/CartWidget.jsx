import React, { useContext } from "react"
import { CartContext } from "./context/CartContext"


const CartWidget = () => {

  const { amountInCart } = useContext(CartContext);

  return (
    <>
      <div className = "position-relative">
        <i className = "bi bi-cart fs-4"></i>
        <span className="position-absolute start-75 translate-middle badge rounded-pill bg-danger badge-Cart-number">
          {amountInCart()}
        </span>
      </div>
    </>
  )
}

export default CartWidget
