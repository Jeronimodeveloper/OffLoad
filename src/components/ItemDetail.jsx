import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  
  return (
    <div>
      {product && (
        <div >
          <section className="d-flex flex-column align-items-center">
            <img src={product.imagen} alt={product.nombre} className="w-25" />
            <h5>{product.nombre}</h5>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
          </section>

          <ItemCount />
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
