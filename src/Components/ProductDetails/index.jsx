import { useEffect, useState } from 'react';
import api from "../../services/axios";
import axios from 'axios';
import { useParams } from 'react-router';
import Product from '../Product';
import './ProductDetails.css'

const ProductDetails = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    api.get(`/api/v1/categories/${categoryId}/category_product`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  

  return (
    <div className='container'>
      <div className='d-flex product-details-container'>
        {products.map((product, index) => {
          return <Product product={product}/>
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
