import React from "react";
import { Link } from "react-router-dom";
// takes in props "dogs" from data managed by useState in ancestor component
// maps over dogs array and displays each dog as an item in a rendered list
function DogList({ dogs }) {
    return (
        <div>
            <h2>
                Like Dogs? Click on your favorite!
            </h2>
            <div>
                {/* creates a new object mapping each dog with their respective image
                and providing the URL to their dynamic route based on the specific dog's name */}
                {dogs.map(d => (
                    <div key={d.name}>
                        <img src={`/${d.src}.jpg`} alt={d.name} />
                        <h3>
                            {/* React Router Link component */}
                            {/* Single Page Application approach */}
                            {/* Prevents page reload */}
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>
                                {d.name}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;
