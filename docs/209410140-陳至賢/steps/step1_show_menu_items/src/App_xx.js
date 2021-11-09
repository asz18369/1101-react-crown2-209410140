import Menu_xx from './components/Menu_xx';
import items from './data';
import { useState } from 'react';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Menu_xx items={menuItems} />
      </section>
    </main>
  );
}

export default App;
