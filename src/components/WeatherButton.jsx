import { Button } from "react-bootstrap";
import React from "react";

const WeatherButton = () => {
  return (
    <div className="button-group">
      <Button variant="info" className="location-btn">
        Current Location
      </Button>
      <Button variant="info" className="location-btn">
        Korea
      </Button>
      <Button variant="info" className="location-btn">
        Japan
      </Button>
    </div>
  );
};

export default WeatherButton;
