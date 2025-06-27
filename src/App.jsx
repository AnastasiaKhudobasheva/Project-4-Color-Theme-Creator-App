import "./App.css";
import { initialColors } from "./assets/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const handleAddColor = (newColor2) => {
    setColors((oldColors) => [newColor2, ...oldColors]);
  };

  const handleDeleteColor = (id) => {
    setColors((oldColors) => {
      const newColors = oldColors.filter((x) => x.id != id);
      return newColors;
    });
  };

  const handleEditColor = (changedColor) => {
    setColors((oldColors) => {
      return oldColors.map((x) =>
        x.id === changedColor.id ? changedColor : x
      );
    });
  };

  function handleResetTheme() {
    setColors(initialColors); // reset state to original theme
  }

  return (
    <main>
      <h1 className="header">Theme / Creator .</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      <button className="reset-button" onClick={handleResetTheme}>
        ✖️ Back to Original Theme
      </button>

      {colors.length === 0 ? (
        <p className="empty-message">No colors yet / add some!</p>
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

      <footer className="app-footer">
        <p>
          Made ✞ by{" "}
          <a
            href="https://github.com/AnastasiaKhudobasheva"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anastasia K
          </a>{" "}
          / Inspired by{" "}
          <a
            href="https://biterecords.bandcamp.com/album/scanning-backwards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phase Fatale &quot;Scanning Backwards&quot;
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;

// Workflow:

// Issue 2:

// colors holds current theme color
// handleAddColor prepends a new color to the array
// <ColorForm onSubmitColor={...}/> passes this function down to the form (as a prop)
