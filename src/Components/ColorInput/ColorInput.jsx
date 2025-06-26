import { useState } from "react";
import "./ColorInput.css";

//component w/two props:
//id – a string, like "hex" or "contrastText", which is used for element linking
//defaultValue – the initial text/code to show in the inputs, like #123456

export default function ColorInput({ id, defaultValue }) {
  // create a state: inputValue, initialized to defaultValue
  // setInputValue: function to update inputValue whenever the user types or picks a color

  const [inputValue, setInputValue] = useState(defaultValue);

  // handleInputValue is an event handler
  // When the user types in the text input or selects a color in the color picker, it:
  // Grabs the new value with event.target.value.
  // Updates the React state using setInputValue

  // (This keeps both inputs in sync bc they share the same inputValue)

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        className="input-text"
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input
        className="input-color"
        type="color"
        value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}

//The return block renders two inputs:

// Text input (<input type="text">):
// value={inputValue} ensures the input shows the current value from state
// onChange={handleInputValue} updates the state whenever the user types

// Color picker (<input type="color">):
// Also uses the same value and onChange
// When the user picks a color, it updates inputValue — which in turn updates the text input

// Both inputs mirror each other perfectly—selecting a color updates the text input, and vice versa

//

// CONCEPT:
// This is a classic controlled component in React:
// the value of the input is governed by React state, not the DOM

// By using the same state for both inputs,
// they stay synchronized
// essential for letting users choose hex codes accurately or via picker

// When used in ColorForm, it ensures the hex and contrastText values are always valid
// colors and easy to pick

//

//useState(defaultValue):	Initializes the value of both inputs
// handleInputValue:	Updates the state when user types or picks a color
// value={inputValue}:	Keeps both inputs showing the same color
// onChange={handleInputValue}:	Syncs user input to the state
