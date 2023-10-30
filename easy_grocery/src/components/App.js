import '../styles.css';
import BoughtItemsList from './BoughtItemsList';
import ItemsList from './ItemsList';
import Search from './Search';
import SortButton from './SortButton';
import { useState } from 'react';

const itemsInit = [
  { id: 1, name: 'Tea', checked: false },
  { id: 2, name: 'Apples', checked: false },
  { id: 3, name: 'Salad', checked: false },
  { id: 4, name: 'Ham', checked: true },
  { id: 5, name: 'Bananas', checked: true },
];

export default function App() {
  const [items, setItems] = useState(itemsInit);

  return (
    <div className='container'>
      <SortButton>
        <span>⬆⬇</span>Sort list
      </SortButton>
      <ItemsList items={items} setItems={setItems} />
      <BoughtItemsList items={items} setItems={setItems} />
      <Search items={items} setItems={setItems}></Search>
    </div>
  );
}
