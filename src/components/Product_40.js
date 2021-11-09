import React from 'react';
import './Product_40.scss';

const Product_40 = ({ name, price, remote_url }) => {
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

export default Product_40;
