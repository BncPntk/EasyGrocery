import '../styles.css';
import BoughtItemsList from './BoughtItemsList';
import ClearAll from './ClearAll';
import ItemsList from './ItemsList';
import Search from './Search';
import SortButton from './SortButton';
import { useState, useEffect } from 'react';

export default function App() {
  const LOCAL_STORAGE_KEY = 'items';
  const [items, setItems] = useState([]);

  function handleClearAll() {
    setItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem('sortOrder');
  }

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (Array.isArray(storedItems)) {
        setItems(storedItems);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error('Error parsing local storage data:', error);
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (items?.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  return (
    <div className='container'>
      <ClearAll onHandleClear={handleClearAll} />
      <SortButton items={items} setItems={setItems}></SortButton>
      <ItemsList items={items} setItems={setItems} />
      <BoughtItemsList items={items} setItems={setItems} />
      <Search items={items} setItems={setItems}></Search>
    </div>
  );
}
