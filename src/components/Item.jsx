import { Link } from 'react-router-dom'

function Item({product}) {

  return (
    <div className="border rounded-4">
      <section className="d-flex flex-column align-items-center">
        <img src={product.imagen} alt={product.nombre} className="w-50"/>
        <h5>{product.nombre}</h5>
        <p>{product.precio}</p>
        <p>{product.categoria}</p>
      </section>

      <footer className="d-flex flex-column align-items-center">
        <button className='Option' >
          <Link to ={"/item/"+product.id}>Ver Datalle</Link>
        </button>
      </footer>
    </div>
  )
}

export default Item
