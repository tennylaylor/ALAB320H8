import { useState, useEffect } from "react";
import { getAllStarships } from "../services/SwApi"; // Corrected import path
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]); // State to hold starship data

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();
      setStarships(data); // Update state with fetched data
      console.log("Fetched Starships:", data); // Debug to ensure the data is loaded
    };
    fetchStarships();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-list">
        {starships.length > 0 ? (
          starships.map((starship, index) => (
            <StarShipCard key={index} starship={starship} />
          ))
        ) : (
          <h2>Loading starships...</h2>
        )}
      </div>
    </div>
  );
}

export default App;
