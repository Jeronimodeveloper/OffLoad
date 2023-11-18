import ItemCount from './ItemCount';

function ItemDetail({ product }) {

  return (
    <div>
      {product && (
        <div>
          <section>
            <img src={product.imagen} alt={product.nombre} />
            <h5>{product.nombre}</h5>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
          </section>

          <footer>
            <button className='Option'>Agregar al Carrito</button>
          </footer>

          <ItemCount />
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
