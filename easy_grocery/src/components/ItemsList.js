import Item from './Item';

export default function ItemsList({ items }) {
  return (
    <div className='items_list'>
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </div>
  );
}
