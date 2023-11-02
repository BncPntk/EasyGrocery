export default function Item({ item, items, setItems }) {
  const emoji = require('emoji-dictionary');

  let formattedName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
  const extractedName = formattedName.split(' ');

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
  return (
    <div className={`item ${item.checked ? 'bought_item' : ''}`} onClick={handleBought}>
      <h3>{emoji.getUnicode(extractedName[0].toLowerCase()) || formattedName.charAt(0)}</h3>
      <p className={formattedName.length > 10 ? 'item_text_small' : 'item_text_normal'}>
        {formattedName.length > 34 ? `${formattedName.slice(0, 31)}...` : formattedName}
      </p>
    </div>
  );
}
