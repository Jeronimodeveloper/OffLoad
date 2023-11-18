import { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [ products, setProducts] = useState([])

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch('../database.json');
          const data = await response.json();
          setProducts(data.products);
        } catch (error) {
          console.error("Error de llamada de productos", error)
        }
      }; getData()
    }, []);

  return (
    <div>
    <ItemList products={products}/>
    </div> )
}

export default ItemListContainer;