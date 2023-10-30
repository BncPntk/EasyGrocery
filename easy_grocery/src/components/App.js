import '../styles.css';
import ItemsList from './ItemsList';
import Search from './Search';
import SortButton from './SortButton';

const items = [
  { id: 1, name: 'Tea', checked: false },
  { id: 2, name: 'Apples', checked: false },
  { id: 3, name: 'Salad', checked: false },
  { id: 4, name: 'Ham', checked: true },
  { id: 5, name: 'Bananas', checked: true },
  { id: 7, name: 'HotDogs', checked: false },
];

export default function App() {
  return (
    <div className='container'>
      <SortButton>
        <span>⬆⬇</span>Sort list
      </SortButton>
      <ItemsList items={items} />
      <Search></Search>
    </div>
  );
}
