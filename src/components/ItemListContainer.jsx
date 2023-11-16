import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    const [ products, setProducts] = useState([]) 

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch('./database.json');
          const data = await response.json();
          setProducts(data.products); 
        } catch (error) {
          console.error("Error de llamada de productos")
        }
      }; getData()
    }, []);
  
  return (
    products.length > 0 && (    
    <div>
      {
      products.map((p) => {
        return(
          <div key={p.id}>
            <h2>Producto: {p.titulo}</h2>
            <h4>{p.precio}</h4>
          </div>
         )
        })
      }

    <ItemCount/>
    </div> )
  )
}

export default ItemListContainer
