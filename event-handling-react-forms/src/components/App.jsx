import React from "react";
import { useState } from "react";

function App() {

  const [isMouseOver, setMouseOver] = useState(false)
  const [name, setName] = useState("")
  const [headingText, setHeadingText] = useState("")

  return (
    <div className="container">
      <h1> Hello {headingText} </h1>
      <form onSubmit={(event) => {
              setHeadingText(name) 
              event.preventDefault()
        }}>
        <input 
        onChange={(event) => { setName(event.target.value) }} 
        type="text" placeholder="What's your name?" 
        value={name}
        />
        
        <button 
          style = {{ backgroundColor: isMouseOver ? "black" : "whitesmoke" }}
          onMouseOver = { () => setMouseOver(true) }
          onMouseOut = { () => setMouseOver(false) }
          onClick={ () => setHeadingText(name)}
          >
            Submit
        </button>
        
      </form>
    </div>
  );
}

export default App;
