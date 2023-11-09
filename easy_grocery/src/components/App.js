import '../styles.css';
import '../modal.css';
import BoughtItemsList from './BoughtItemsList';
import ClearAll from './ClearAll';
import ItemsList from './ItemsList';
import Search from './Search';
import SortButton from './SortButton';
import Modal from './Modal';
import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'items';

export default function App() {
  const [items, setItems] = useState([]);
  const [showClearAllModal, setShowClearAllModal] = useState(false);

  function handleClearAll() {
    setItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem('sortOrder');
    setShowClearAllModal(false);
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
      <nav>
        {items.length >= 1 && (
          <ClearAll onHandleClear={handleClearAll} onOpenModal={() => setShowClearAllModal(true)} />
        )}
        {items.length >= 1 && <SortButton items={items} setItems={setItems}></SortButton>}
      </nav>
      <ItemsList items={items} setItems={setItems} />
      <BoughtItemsList items={items} setItems={setItems} />
      <Search items={items} setItems={setItems}></Search>
      {showClearAllModal && <Modal onCancel={setShowClearAllModal} onConfirm={handleClearAll} />}
    </div>
  );
}
