import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Directory_40.scss';
// import items from './menu-items-data';
import MenuItem_40 from './MenuItem_40';

const Directory_40 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL = 'https://crown1101.herokuapp.com/api_40/category_40';
      const LOCAL_URL = '/api_40/category_40';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_40/category_40', data);
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
            <MenuItem_40
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

export default Directory_40;
