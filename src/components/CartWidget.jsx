const CartWidget = () => {
  return (
    <div className = "position-relative">
      <i className = "bi bi-cart fs-4"></i>
      <span className="position-absolute start-75 translate-middle badge rounded-pill bg-danger badge-Cart-number">
          8
      </span>
    </div>
  )
}

export default CartWidget
