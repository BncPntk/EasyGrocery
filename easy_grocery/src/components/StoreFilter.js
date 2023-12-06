export default function StoreFilter({
  store,
  setStore,
  storeNames,
  setStoreNames,
  selectedStore,
  setSelectedStore,
}) {
  function handleFormSubmit(e) {
    e.preventDefault();

    const trimmedStore = store.trim();
    if (trimmedStore === '') return;

    setStoreNames((prevStoreNames) => {
      if (prevStoreNames.includes(trimmedStore)) {
        return prevStoreNames;
      } else {
        const newStoreNames = [...prevStoreNames, trimmedStore];
        localStorage.setItem('storeNames', JSON.stringify(newStoreNames));
        return newStoreNames;
      }
    });
    setStore('');
    setSelectedStore(store);
  }

  function handleSelectChange(e) {
    setSelectedStore(e.target.value);
  }

  function handleInputChange(e) {
    setStore(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase());
  }

  return (
    <form className='store_select' onSubmit={handleFormSubmit}>
      <select onChange={handleSelectChange} value={selectedStore} className='sort_button'>
        {storeNames.map((store, i) => (
          <option key={i}>{store}</option>
        ))}
      </select>
      <input
        className='search_input'
        placeholder='Add a new store'
        value={store}
        onChange={handleInputChange}
      ></input>
    </form>
  );
}
