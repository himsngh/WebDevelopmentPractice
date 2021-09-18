import React, { useState } from "react";

function App() {

  const [item, setItem] = useState("")
  const [list, setList] = useState([])

  function handleClick() {
    setList((prevValue => {
      return [
        ...prevValue,
        item
      ]
    }))

    setItem("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={(event) => { setItem(event.target.value) }} type="text" value={item} />
        <button
          onClick={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            list.map((todoItem) => {
                return (
                  <li>{todoItem}</li>
                )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
