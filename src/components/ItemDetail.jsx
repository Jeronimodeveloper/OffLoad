import ItemCount from "./ItemCount"

function ItemDetail({product}) {
console.log(product)

  return (
    {product.length > 0 && (
        <div>
      <section>
        <h5>{product.nombre}</h5>
        <p>{product.descripcion}</p>
        <img src={product.imagen}/>
        <p>{product.precio}</p>
        <p>{product.categoria}</p>
      </section>

      <footer>
        <button className='Option'>Agregar al Carrito</button>
      </footer>

      <ItemCount/>
      </div>
      )}
  )
}

export default ItemDetail
