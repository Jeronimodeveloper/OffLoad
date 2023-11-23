import { Link } from 'react-router-dom'

function Item({product}) {

  return (
    <>
    <div className="border rounded-4">
      <section className="d-flex flex-column align-items-center">
        <img src={product.imagen} alt={product.nombre} className="w-50"/>
        <h5>{product.nombre}</h5>
        <p>$ {product.precio}</p>
      </section>

      <footer className="d-flex flex-column align-items-center">
        <button className='Option btn bg-black border-0 text-white ms-4 px-3 h-100 mb-3' >
          <Link to ={"/item/"+product.id} className="text-decoration-none text-white">Ver Datalle</Link>
        </button>
      </footer>
    </div>
    </>
  );
}

export default Item