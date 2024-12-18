import React from 'react';
import { Link } from 'react-router-dom';
import './Header_40.scss';
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header_40 = () => {
  return (
    <div>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>
        <div className='options'>
          <Link to='/api_40/shop_40' className='option'>
            Shop
          </Link>
          <Link to='/contact_40' className='option'>
            Contact
          </Link>
          <Link to='/signin_40' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_40;
