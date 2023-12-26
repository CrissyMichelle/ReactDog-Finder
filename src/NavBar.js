import { NavLink } from "react-router-dom";
// accepts as prop the 'dogs' array managed as state data in App component
function NavBar({ dogs = [] }) {
    console.log('NavBar dogs: ', dogs); // Debugging line
    // NavLink object auto-generates a nav bar
    // map() iterates over dogs array to provide list of navbar links
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
        </NavLink>
    ));

    return (
        <nav>
            {/* `end` tells React to close out NavLinks */}
            {/* links array provides another NavLink element */}
            <NavLink to="/dogs" end>
                Home
            </NavLink>
            { links }
        </nav>
    );
}

export default NavBar;
