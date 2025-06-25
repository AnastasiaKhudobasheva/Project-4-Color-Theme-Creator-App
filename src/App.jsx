import { initialColors } from "./assets/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor2) => {
    setColors((oldColors) => [newColor2, ...oldColors]);
  };

  const handleDeleteColor = (id) => {
    setColors((oldColors) => {
      const newColors = oldColors.filter((x) => x.id != id);
      return newColors;
    });
  };

  return (
    <main>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={handleAddColor} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
    </main>
  );
}

export default App;

// Workflow:

// Issue 2:

// colors holds current theme color
// handleAddColor prepends a new color to the array
// <ColorForm onSubmitColor={...}/> passes this function down to the form (as a prop)
