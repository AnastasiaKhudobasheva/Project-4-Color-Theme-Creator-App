import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { nanoid } from "nanoid";

// declaring a React component
// It expects two props:
// onSubmitColor: a function that runs when the form is submitted
// initialData: default values to pre-fill the form inputs
// (gives users a starting example if they don’t pass real initialData)

export default function ColorForm({
  onSubmitColor,
  initialData = {
    role: "e.g. accent color",
    hex: "#C0517A",
    contrastText: "#FFFFFF",
  },
}) {
  function handleSubmit(event) {
    // stop the page from refreshing on submit
    event.preventDefault();
    // collect values from all named inputs inside the form
    const formData = new FormData(event.target);
    //convert the FormData into a plain JavaScript object eg { role: "xxx", hex: "xxx", contrastText: "xxx" }
    const data = Object.fromEntries(formData);
    // generate stable unique ID and add to data (role, hex, contrastText)

    data.id = initialData.id ? initialData.id : nanoid();

    // const newColor = {
    //   id: nanoid(),
    //   ...data,
    // };
    //send this object up to a parent handler in App.jsx
    onSubmitColor(data);
    //reset form after submitting
    event.target.reset();
  }

  /// JSX Form Structure

  return (
    // on Submit: wire the form to our handleSubmit function

    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          // first user Input:
          // id="role" and name="role" — must match to be picked up by FormData
          type="text"
          id="role"
          name="role"
          // set initial text but dont control its value during user typing
          defaultValue={initialData.role}
        />
      </label>
      <br />

      <label
        htmlFor="hex"
        // Hex & ContrastText use ColorInput components
        // these are controlled inside the component (text + color picker sync)
        //
      >
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>➕ new color</button>
    </form>
  );
}

// Key CONCEPTS:

// Uncontrolled vs Controlled inputs:

// defaultValue makes it uncontrolled
// React doesn’t manage its value after setup

//ColorInput is controlled,
// since it uses value and onChange with React state

//

// FormData + Object.fromEntries:

// Simple way to turn our form’s inputs into an object without React state
// => perfect for easy data collection

//SUMMARY
// We've created a form with three parts:
//
// Role (text)
// Hex (text + color picker)
// ContrastText (text + color picker)
//
// It starts with default values to guide users
// On submission, it builds a JS object with role, hex, contrastText
// and calls onSubmitColor(data), which WE define in App.jsx

// generating ID (nanoid()) inside handleSubmit -> newColor object
//calling onSubmitColor(newColor) with the full object incl ID
