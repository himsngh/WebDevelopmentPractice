import React from "react";
import {useState} from "react";

function App() {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000);

  return (
    <div className="container">
      <h1>{ currentTime }</h1>
      <button onClick={() => setCurrentTime(new Date().toLocaleTimeString())}>Get Time</button>
    </div>
  );
}

export default App;
