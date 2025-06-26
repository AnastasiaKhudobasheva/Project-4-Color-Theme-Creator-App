import { initialColors } from "./assets/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);
  // const [colorToEdit, setColorToEdit] = useState(null);

  const handleAddColor = (newColor2) => {
    setColors((oldColors) => [newColor2, ...oldColors]);
  };

  const handleDeleteColor = (id) => {
    setColors((oldColors) => {
      const newColors = oldColors.filter((x) => x.id != id);
      return newColors;
    });
  };

  // const handleChooseColorToEdit = (id) => {
  //   setColorToEdit(colors.find((x) => x.id === id));
  // };

  const handleEditColor = (changedColor) => {
    setColors((oldColors) => {
      return oldColors.map((x) =>
        x.id === changedColor.id ? changedColor : x
      );
    });
    // setColorToEdit(null);
  };

  return (
    <main>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors yet — add some!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onSubmitColor={handleEditColor}
          />
        ))
      )}
    </main>
  );
}

export default App;

// Workflow:

// Issue 2:

// colors holds current theme color
// handleAddColor prepends a new color to the array
// <ColorForm onSubmitColor={...}/> passes this function down to the form (as a prop)
