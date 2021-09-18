import React from "react";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";

// let loggedIn = false

// const time = new Date().getHours();

let userIsRegistered = true

function App() {
  return (
    <div className="container">
      {/* {
        loggedIn ? <h1>Hello</h1> : <Login />
      } */}
      {/* one more way to use conditions  */}
      {/* the first statemtent is evaulated and if true then compiler goes for the second one and react renders it  */}
      {/* <h1>
        {
          time > 9 && <h1>Why are you still waiting?</h1>
        }
        {
          time < 12 && <h1>Hurry!! Its about to get closed.</h1>
        }
      </h1> */}

      {/* {
        userIsRegistered ? <Login /> : <Register />
      } */}

      {/* {
        userIsRegistered && <Login />
      }
      {
        !userIsRegistered && <Register />
      } */}

     <Form 
      isRegistered={userIsRegistered}
     />
    </div>
  );
}

export default App;
