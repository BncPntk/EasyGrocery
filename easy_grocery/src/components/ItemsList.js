import Item from './Item';

export default function ItemsList({ items, setItems }) {
  const filteredItems = items.filter((item) => !item.checked);
  return (
    <div className='items_list'>
      {filteredItems.map((item, i) => (
        <Item item={item} key={i} items={items} setItems={setItems} />
      ))}
    </div>
  );
}
