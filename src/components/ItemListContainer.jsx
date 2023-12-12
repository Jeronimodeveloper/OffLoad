import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosData = collection(db, 'productos');
        const q = categoria ? query(productosData, where('categoria', '==', categoria)) : productosData;
        const resp = await getDocs(q);

        setTimeout(() => {
          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoria]);

  return (
    <div>
      {loading ? (
        <div className="d-flex flex-column align-items-center ">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" className='p-5'/>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;