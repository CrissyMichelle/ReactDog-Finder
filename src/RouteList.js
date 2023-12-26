import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";
// RouteList component accepts data managed by App component as props "dogs"
function RouteList({ dogs }) {
    // provide client-side routing based on children components and
    // updated `Switch` functionality to the v6 `Routes`
    return (
        <Routes>
            {/* renders the list of all dogs available in the app */}
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            {/* provides a dynamic route based on a specific dog's name */}
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
            {/* "/*" catches all unmatched routes; recommended best practice */}
            <Route path="/*" element={<Navigate to="/dogs" />} />
        </Routes>
    );
}

export default RouteList;
