import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = () => {
    
  const [ products, setProducts] = useState([]);

  const categoria = useParams().categoria;

    useEffect(() => {
      
      const productosData = collection(db, "productos");

      const q = categoria ? query(productosData, where("categoria", "==", categoria)) : productosData;

      getDocs(q)
      .then((resp) => {
                
        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      
    }, [categoria]);

  return (
    <div>
    <ItemList products={products}/>
    </div> )
}

export default ItemListContainer;