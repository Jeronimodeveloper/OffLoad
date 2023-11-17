import { Link } from 'react-router-dom'

function Item({product}) {

  return (
    <div>
      <section>
        <h5>{product.nombre}</h5>
        <p>{product.precio}</p>
        <p>{product.categoria}</p>
      </section>

      <footer>
        <button className='Option' ><Link to ={"/item/"+product.id}>Ver Datalle</Link></button>
      </footer>
    </div>
  )
}

export default Item
