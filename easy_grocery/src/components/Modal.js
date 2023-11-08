export default function Modal({ onCancel, onConfirm }) {
  const deleteAllItems = () => {
    onConfirm();
    onCancel(false);
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <p>Are you sure you want to delete all items?</p>
        <div className='modal-buttons'>
          <button className='modal-button modal-delete-btn' onClick={deleteAllItems}>
            Delete
          </button>
          <button className='modal-button modal-cancel-btn' onClick={() => onCancel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
