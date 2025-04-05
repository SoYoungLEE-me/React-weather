import { Button } from "react-bootstrap";
import React from "react";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="button-group">
      <Button
        variant="info"
        className="location-btn"
        onClick={() => setCity("")}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant="info"
          className="location-btn"
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
