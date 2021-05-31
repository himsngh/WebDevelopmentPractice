
import { useState } from 'react';


const ANIMALS = ["bird", "dog", "cat", "rabbit", "horse"];

const SearchParams = () => {
    //const location = "India"

    // const locationTuple = useState("India");
    // const location = locationTuple[0];
    // const setLocation = locationTuple[1];

    const [location, setLocation] = useState("India");

    // function updateLocation(e) {
    //     setLocation(e.target.value)
    // }

    const [animal, setAnimal] = useState("")
    return (
        // class cannot be used because class is keyword in javascript. 
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location"
                        onChange={(e) => setLocation(e.target.value)}
                        //onChange={updateLocation}
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;