import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteConfirmation = () => {
    setIsConfirmingDelete(true); // Show confirmation
  };

  // Cancel deletion
  const handleCancelDelete = () => {
    setIsConfirmingDelete(false); // Hide confirmation
  };

  // Proceed with the deletion
  const handleConfirmDelete = () => {
    onDeleteColor(color.id);
    setIsConfirmingDelete(false); // Hide confirmation
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {isConfirmingDelete ? (
        <div>
          <div className="delete-confirmation">Delete color?</div>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleDeleteConfirmation}>Delete</button>
      )}

      {/* <button onClick={() => onDeleteColor(color.id)}>Delete Color</button> */}
    </div>
  );
}
