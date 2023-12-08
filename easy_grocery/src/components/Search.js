import React, { useEffect, useState } from 'react';

export default React.forwardRef(function Search({ items, setItems, selectedStore }, ref) {
  const [inputValue, setInputValue] = useState('');

  useEffect(
    function () {
      ref.current.focus();
    },
    [ref]
  );

  function handleAddItem() {
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') return;

    const existingItem = items.find((item) => item.name === trimmedValue && item.storeName === selectedStore);

    if (existingItem) {
      if (existingItem.checked) {
        const newItem = {
          ...existingItem,
          checked: false,
        };

        setItems((prevItems) => prevItems.map((item) => (item.name === trimmedValue ? newItem : item)));
      }
    } else {
      const newItem = {
        id: Number(items.length + 1),
        name: trimmedValue,
        checked: false,
        storeName: selectedStore,
      };

      setItems((prevItems) => [...prevItems, newItem]);
    }

    setInputValue('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItem();
  }

  return (
    <div className='search_container'>
      <form className='search_form' onSubmit={handleSubmit}>
        <label htmlFor='search' className='search_icon'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#555555' viewBox='0 0 20 24'>
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </label>
        <input
          id='search'
          className='search_input'
          type='text'
          placeholder='I need...'
          value={inputValue}
          ref={ref}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='search_button'>+</button>
      </form>
    </div>
  );
});
