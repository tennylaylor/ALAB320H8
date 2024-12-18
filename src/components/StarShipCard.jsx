import React from "react";

export default function StarShipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2> {/* Display the name */}
      <p>Model: {starship.model}</p> {/* Optional: Show ship model */}
    </div>
  );
}
