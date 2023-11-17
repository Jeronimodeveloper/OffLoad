import Item from "./Item"

function ItemList({products}) {


  return (
    <div>
      <h1>PRODUCTOS</h1>
      {products.length > 0 && (
        products.map((product)=> {
          return <Item key={product.id} product={product}/>
         }))
        }
    </div>
  )
}

export default ItemList