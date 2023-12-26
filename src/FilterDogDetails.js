import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from './DogDetails';
// accepts "dogs" array as prop from state data managed by ancestor component
function FilterDogDetails({ dogs }) {
    // employing the useParams hook offers user dynamic querying
    const { name } = useParams();

    if (name) {
        // find function searches array for element matching the given condition
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDetails dog={currentDog} />;
    }
    // if name exists, return child component,
    // passing found dog as prop
    // else return nothing
    return null;
}

export default FilterDogDetails;
