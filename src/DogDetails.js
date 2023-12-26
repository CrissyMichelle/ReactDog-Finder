import React from "react";
import { Link, Navigate } from "react-router-dom";
// uses "dog" from parent component as prop and renders HTML
// displaying the corresponding dog data
function DogDetails({ dog }) {
    // `Navigate` component handles redirects in Router v6
    if (!dog) return <Navigate to="/dogs" />

    return (
        <div>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <h2>
                {dog.name}
            </h2>
            <h3>
                {dog.age} solar years old
            </h3>
            <ul>
                {/* using map to iterate over dog.facts */}
                {/* follows React best practice for rendering a list */}
                {dog.facts.map((fact, i) => (
                    <li key={i}>
                        {fact}
                    </li>
                ))}
            </ul>
            {/* `Link`-> standard SPA approach to client-side routing */}
            <Link to="/dogs">Go Back</Link>
        </div>
    );
}

export default DogDetails;
