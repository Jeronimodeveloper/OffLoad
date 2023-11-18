import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
const { catname } = useParams()

    const [ products, setProducts] = useState([])

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch('../database.json');
          const data = await response.json();
          console.log(catname)

          if (catname !== undefined) {
            setProducts(data.products.filter((p)=> p.categoria === catname))
          } else setProducts(data.products)

        } catch (error) {
          console.error("Error de llamada de productos", error)
        }
      }; getData()
    }, [catname]);

  return (
    <div>
    <ItemList products={products}/>
    </div> )
}

export default ItemListContainer;