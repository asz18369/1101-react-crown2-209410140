import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Directory_xx.scss';
// import items from './menu-items-data';
import MenuItem_xx from './MenuItem_xx';

const Directory_xx = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL = 'https://crown1101.herokuapp.com/api_xx/category_xx';
      const LOCAL_URL = '/api_xx/category_xx';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_xx/category_xx', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, link_url, size } = item;
          return (
            <MenuItem_xx
              key={id}
              name={name}
              remote_url={remote_url}
              link_url={link_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_xx;
