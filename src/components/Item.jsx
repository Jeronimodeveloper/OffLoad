import { Link } from 'react-router-dom'

function Item({product}) {

  return (
    <>
    <div className="border rounded-4">
      <section className="d-flex flex-column align-items-center">
        <img src={product.imagen} alt={product.nombre} className="w-50"/>
        <h5>{product.nombre}</h5>
        <p>{product.precio}</p>
      </section>

      <footer className="d-flex flex-column align-items-center">
        <button className='Option btn btn-primary mb-3' >
          <Link to ={"/item/"+product.id} className="text-decoration-none text-white">Ver Datalle</Link>
        </button>
      </footer>
    </div>
    </>
  );
}

export default Item