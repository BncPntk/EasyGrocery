export default function Search() {
  return (
    <div className='search_container'>
      <form className='search_form' action=''>
        <label htmlFor='search' className='search_icon'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#555555' viewBox='0 0 20 24'>
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </label>
        <input id='search' className='search_input' type='text' placeholder='I need...' />
        <button className='search_button'>+</button>
      </form>
    </div>
  );
}
