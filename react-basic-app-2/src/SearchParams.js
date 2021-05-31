
import { useState, useEffect } from 'react';
import Pet from './Pet';

const ANIMALS = ["bird", "dog", "cat", "rabbit", "horse"];

const SearchParams = () => {
    //const location = "India"

    // const locationTuple = useState("India");
    // const location = locationTuple[0];
    // const setLocation = locationTuple[1];

    const [location, setLocation] = useState("");

    // function updateLocation(e) {
    //     setLocation(e.target.value)
    // }

    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        console.log(json)

        setPets(json.pets);
    }

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
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {
                            breeds.map(breed => (
                                <option value={breed} key={breed}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => {
                    return <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                })
            }

            {/* {pets.map((pet) => (
                <Pet
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    key={pet.id}
                />
            ))} */}
        </div>
    )
}

export default SearchParams;