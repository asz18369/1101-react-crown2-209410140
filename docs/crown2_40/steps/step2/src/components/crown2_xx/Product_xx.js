import React from 'react';
import './Product_xx.scss';

const Product_xx = ({ name, price, remote_url }) => {
  return (
    <div className='collection-item'>
      <img className='image' src={remote_url} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <button className='custom-button'>Add to Cart</button>
    </div>
  );
};

export default Product_xx;
