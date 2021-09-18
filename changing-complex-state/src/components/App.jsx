import React, {useState} from "react";

function App() {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  })

  function handleChange(event) {

    // const value = event.target.value;
    // const placeHolder = event.target.name;

    const {value, name} = event.target;

    // if (placeHolder === "fName") {
    //   setName({firstName: value, lastName: name.lastName})
    // }else {
    //   setName({firstName: name.firstName, lastName: value})
    // }

    // Dont try to access the event inside the hook set State.
    setName((prevValue => {
        if (name === "fName") {
          return {
            firstName: value,
            lastName: prevValue.lastName
          }
        } else {
          return {
            firstName: prevValue.firstName,
            lastName: value
          }
        }
    }))
  }

  return (
    <div className="container">
      <h1>Hello {name.firstName} {name.lastName}</h1>
      <form>
        <input
         onChange = {handleChange}
         name="fName" 
         placeholder="First Name" 
         value={name.firstName}
         />
        <input
         onChange = {handleChange}
         name="lName" 
         placeholder="Last Name"
          value={name.lastName} 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
