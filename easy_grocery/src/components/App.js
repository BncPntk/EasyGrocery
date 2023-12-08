import '../styles.css';
import '../modal.css';
import BoughtItemsList from './BoughtItemsList';
import ClearAll from './ClearAll';
import ItemsList from './ItemsList';
import Search from './Search';
import SortButton from './SortButton';
import Modal from './Modal';
import StoreFilter from './StoreFilter';
import { useState, useEffect, useRef } from 'react';

const LOCAL_STORAGE_ITEMS = 'items';
const LOCAL_STORAGE_SORT_ORDERY = 'sortOrder';
const LOCAL_STORAGE_STORE_NAMES = 'storeNames';

export default function App() {
  const [items, setItems] = useState([]);
  const [showClearAllModal, setShowClearAllModal] = useState(false);
  const [store, setStore] = useState('');
  const [storeNames, setStoreNames] = useState(['General']);
  const [selectedStore, setSelectedStore] = useState('General');

  const searchRef = useRef(null);

  const filteredItems =
    selectedStore === 'General' ? items : items.filter((item) => item.storeName === selectedStore);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS)) || [];
      const storedStoreNames = JSON.parse(localStorage.getItem(LOCAL_STORAGE_STORE_NAMES)) || ['General'];

      setItems(storedItems);
      setStoreNames(storedStoreNames);
    } catch (error) {
      console.error('Error parsing local storage data:', error);
      setItems([]);
      setStoreNames(['General']);
    }
  }, []);

  useEffect(() => {
    if (items?.length) {
      localStorage.setItem(LOCAL_STORAGE_ITEMS, JSON.stringify(items));
    }
  }, [items]);

  function handleClearAll() {
    setItems([]);
    setStoreNames(['General']);
    localStorage.removeItem(LOCAL_STORAGE_ITEMS);
    localStorage.removeItem(LOCAL_STORAGE_SORT_ORDERY);
    localStorage.removeItem(LOCAL_STORAGE_STORE_NAMES);
    setShowClearAllModal(false);
  }

  function handleStoreAdded() {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }

  return (
    <div className='container'>
      <nav>
        {filteredItems.length >= 1 && (
          <ClearAll onHandleClear={handleClearAll} onOpenModal={() => setShowClearAllModal(true)} />
        )}
        <StoreFilter
          store={store}
          setStore={setStore}
          storeNames={storeNames}
          setStoreNames={setStoreNames}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          onStoreAdded={handleStoreAdded}
        />
        {filteredItems.length >= 1 && <SortButton items={items} setItems={setItems}></SortButton>}
      </nav>
      <ItemsList items={filteredItems} setItems={setItems} />
      <BoughtItemsList items={filteredItems} setItems={setItems} />
      <Search items={items} setItems={setItems} selectedStore={selectedStore} ref={searchRef}></Search>
      {showClearAllModal && <Modal onCancel={setShowClearAllModal} onConfirm={handleClearAll} />}
    </div>
  );
}
