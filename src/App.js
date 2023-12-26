import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";
import whiskey from "./whiskey.jpg";
import Duke from "./Duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
// array for mocking API call
const defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: Duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really laid back.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

function App() {
  // manages the data for all dogs available in the app
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });


  // handles a mock API call to fetch all the dogs data
  // accessess pre-loaded data from defaultProps object
  // because axios.get won't work with fake url
  useEffect(() => {
    async function loadDogs(){
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        setDogs({
          data: response.data,
          isLoading: false
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
        setDogs({
          data: defaultProps,
          isLoading: false
        });
      }
    }

    loadDogs();
  }, []); // empty array means the effect runs on initial render of App

  if (dogs.isLoading) {
    return <h1>Loading... ....</h1>
  }
  // renders the HTML for selecting dogs based on  child components
  return (
    <div>
      <h1>Welcome Dog Friend!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data.dogs} />
        <div>
          <RouteList dogs={dogs.data.dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
