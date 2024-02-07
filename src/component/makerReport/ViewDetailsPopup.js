// ViewDetailsPopup.js

// ViewDetailsPopup.js

import React from "react";

const ViewDetailsPopup = ({ isVisible, onClose, selectedItemDetails }) => {
  return (
    isVisible && (
      <div className="view-popup delete-confirmation-popup-container">
        <div className="view-popup-content delete-confirmation-popup">
          <h2>View Details</h2>
          {selectedItemDetails && (
            <div className="grid-container">
              {Object.entries(selectedItemDetails).map(([label, value], index) => (
                <div key={label} className="grid-item">
                  <div className="label">{label}:</div>
                  <div className="value">{value}</div>
                </div>
              ))}
            </div>
          )}
          <button onClick={onClose} className="button-3 yes" role="button">
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default ViewDetailsPopup;
