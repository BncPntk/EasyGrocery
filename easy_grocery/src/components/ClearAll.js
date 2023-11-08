export default function ClearAll({ onHandleClear }) {
  return (
    <div className='clear_button'>
      <button onClick={onHandleClear}>Clear All</button>
    </div>
  );
}
