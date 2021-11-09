import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShopPage_40.scss';
import Product_40 from '../components/Product_40';

const ShopPage_40 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const HEROKU_URL = `https://crown1101.herokuapp.com/api_40/shop_40`;
      const LOCAL_URL = `/api_40/shop_40`;
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_40/shop_40', data);
      setProducts(data);
    };
    fetchShop();
  }, []);

  return (
    <div>
      <div className='shop-page'>
        <div className='collection-page'>
          <h1 className='title'>Shop Products</h1>
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

export default ShopPage_40;
