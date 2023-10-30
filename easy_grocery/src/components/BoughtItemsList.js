import Item from './Item';

export default function BoughtItemsList({ items, setItems }) {
  const filreredItems = items.filter((item) => item.checked);
  return (
    <div>
      {filreredItems.length > 0 ? <p className='history_text'>History</p> : ''}
      <div className='bought_items_list'>
        {filreredItems.map((item, i) => (
          <Item item={item} key={i} setItems={setItems} />
        ))}
      </div>
    </div>
  );
}
