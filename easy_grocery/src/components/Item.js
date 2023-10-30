export default function Item({ item }) {
  return (
    <div className='item'>
      <h3>{item.name.charAt(0)}</h3>
      <p>{item.name}</p>
    </div>
  );
}
