import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductsPage_40.scss';
import Product_40 from '../components/Product_40';

const ProductsPage_40 = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log('category', category);
  useEffect(() => {
    const fetchProducts = async () => {
      const HEROKU_URL = `https://crown1101.herokuapp.com/api_40/shop_40`;
      const LOCAL_URL = `/api_40/shop_40`;
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_40/shop_40/:category', data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className='shop-page'>
        <div className='collection-page'>
          <h1 className='title'>{category.toUpperCase()}</h1>
          <div className='items'>
            {products.map((item) => {
              const { id, name, price, remote_url } = item;
              return (
                <Product_40
                  key={id}
                  name={name}
                  price={price}
                  remote_url={remote_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage_40;
