import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

  const [ product, setProduct] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('../database.json');
        const data = await response.json();
        setProduct(data.products.find((p) => p.id === parseInt(id)));
      } catch (error) {
        console.error("Error de llamada del producto", error)
      }
    }; getData()
  }, []);


  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer
