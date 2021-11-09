import Menu_xx from './components/Menu_xx';
import items from './data';
import { useState } from 'react';

import Categories_xx from './components/Categories_xx';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
// console.log('allCategories', allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories_xx filterItems={filterItems} categories={categories} />
        <Menu_xx items={menuItems} />
      </section>
    </main>
  );
}

export default App;
