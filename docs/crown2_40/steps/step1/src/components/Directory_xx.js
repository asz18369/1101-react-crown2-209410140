import React, { useState } from 'react';
import './Directory_xx.scss';
import items from './menu-items-data';
import MenuItem_xx from './MenuItem_xx';

const Directory_xx = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_xx
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_xx;
