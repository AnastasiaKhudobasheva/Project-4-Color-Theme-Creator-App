import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onSubmitColor }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  // enable editing when the edit button is clicked
  const handleEdit = () => {
    setIsEditing(true);
    // Set isEditing to true to show the form
  };

  // cancel editing when the cancel button is clicked
  const handleCancel = () => {
    setIsEditing(false); // set isEditing to false so it hides the form
  };

  // color update and send it to the parent component
  const handleUpdateColor = (updatedColor) => {
    onSubmitColor(updatedColor);
    setIsEditing(false);
    // close the edit form after updating the color
  };

  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: color.contrastText }}
    >
      {isEditing ? (
        // ========== EDIT MODE ==========
        <>
          <ColorForm
            onSubmitColor={(updatedColor) => {
              handleUpdateColor(updatedColor);
            }}
            initialData={color}
            isEditing={true}
          />
          <button className="button-cancel-edit" onClick={handleCancel}>
            Cancel Edit
          </button>
        </>
      ) : (
        // ========== VIEW MODE ==========
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>

          {isConfirmingDelete ? (
            <div>
              <div className="delete-confirmation">Delete color?</div>
              <button
                className="button-delete-yes"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
              <button
                className="button-delete-cancel"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="button-delete"
              onClick={handleDeleteConfirmation}
            >
              Delete
            </button>
          )}

          <button className="button-edit" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
