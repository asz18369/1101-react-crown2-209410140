import React from 'react';

const Categories_xx = ({ filterItems, categories }) => {
  console.log('categories', categories);
  return (
    <div>
      <div className='btn-container'>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type='button'
              className='filter-btn'
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories_xx;
