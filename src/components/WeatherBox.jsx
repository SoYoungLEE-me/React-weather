import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <div className="city">{weather?.name}</div>
      <div className="condition">{weather?.weather[0].description}</div>
      <div className="temperature">
        {weather?.main.temp}℃ / {(weather?.main.temp * 1.8 + 32).toFixed(1)}℉
      </div>
    </div>
  );
};

export default WeatherBox;
