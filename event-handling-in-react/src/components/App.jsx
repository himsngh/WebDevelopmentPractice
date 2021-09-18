import React from "react";
import { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [isMouseOver, setMouseOver] = useState(false)
  

  function handleClick() {
    setHeadingText("Submitted")
  }

  // function handleMouseOver() {
  //     setMouseOver(true)
  // }

  // function handleOnMouseOut() {
  //   setMouseOver(false)
  // }

  return (
    <div className="container">
      <h1> {headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style = {{ backgroundColor: isMouseOver ? "black" : "whitesmoke" }}
        onClick={ handleClick }
        onMouseOver = { () => setMouseOver(true) }
        onMouseOut = { () => setMouseOver(false) }
        >
          Submit
      </button>
    </div>
  );
}

export default App;
