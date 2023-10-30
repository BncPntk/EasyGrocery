export default function Item({ item, items, setItems }) {
  function handleBought() {
    setItems((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          return { ...prevItem, checked: !prevItem.checked };
        }
        return prevItem;
      });
    });
  }
  if (item.checked) {
    return (
      <div className='item bought_item' onClick={handleBought}>
        <h3>{item.name.charAt(0)}</h3>
        <p className={item.name.length > 10 ? 'item_text_small' : 'item_text_normal'}>
          {item.name.length > 34 ? item.name.slice(0, 31) + '...' : item.name}
        </p>
      </div>
    );
  } else {
    return (
      <div className='item' onClick={handleBought}>
        <h3>{item.name.charAt(0)}</h3>
        <p className={item.name.length > 10 ? 'item_text_small' : 'item_text_normal'}>
          {item.name.length > 34 ? item.name.slice(0, 31) + '...' : item.name}
        </p>
      </div>
    );
  }
}
