import React, { useState, useEffect } from 'react';

export default function SortButton({ items, setItems }) {
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const storedSortOrder = localStorage.getItem('sortOrder');
    if (storedSortOrder) {
      setSortOrder(storedSortOrder);
    }
  }, []);

  function handleSort(order) {
    if (order === 'asc') {
      const sortedItems = [...items];
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      setItems(sortedItems);
      setSortOrder('asc');
    } else if (order === 'default') {
      const sortedItems = [...items];
      sortedItems.sort((a, b) => a.id - b.id);
      setItems(sortedItems);
      setSortOrder('default');
    }

    localStorage.setItem('sortOrder', order);
  }

  return (
    <div className='sort_button'>
      <select value={sortOrder} onChange={(e) => handleSort(e.target.value)}>
        <option value='default'>Default</option>
        <option value='asc'>Ascending</option>
      </select>
    </div>
  );
}
