import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductsPage_xx.scss';
import Product_xx from '../components/Product_xx';

const ProductsPage_xx = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log('category', category);
  useEffect(() => {
    const fetchProducts = async () => {
      const HEROKU_URL = `https://crown1101.herokuapp.com/api_xx/shop_xx`;
      const LOCAL_URL = `/api_xx/shop_xx`;
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_xx/shop_xx/:category', data);
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
                <Product_xx
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

export default ProductsPage_xx;
