import { Button } from "react-bootstrap";
import React from "react";

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  return (
    <div className="button-group">
      <Button
        variant="info"
        className={`location-btn ${selectedCity === "" ? "active" : ""}`}
        onClick={() => setCity("")}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant="info"
          className={`location-btn ${selectedCity === item ? "active" : ""}`}
          key={item}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
