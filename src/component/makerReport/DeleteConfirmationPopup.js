import React from "react";

const DeleteConfirmationPopup = ({ onClose, onConfirm }) => {
  return (
    <div className="delete-confirmation-popup-container">
      <div className="delete-confirmation-popup">
        <p>Are you sure you want to delete this item?</p>
        <div className="button">
          <button onClick={onConfirm}  class="button-3 yes" role="button">Yes</button>
          <button onClick={onClose}  class="button-3 no" role="button">No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
