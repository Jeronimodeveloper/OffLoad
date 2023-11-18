import React from 'react';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="container">
      <h1>PRODUCTOS</h1>
      <div className="row">
        {products?.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Item product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ItemList;
