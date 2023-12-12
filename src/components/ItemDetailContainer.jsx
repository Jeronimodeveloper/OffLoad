import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const docData = doc(db, "productos", id);
    getDoc(docData)
      .then((resp) => {
        setProduct(
          { ...resp.data(), id: resp.id }
          );
      })
  }, [id]);

  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer
