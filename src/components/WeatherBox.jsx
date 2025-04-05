import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
  faSmog,
  faCloudShowersHeavy,
  faRainbow,
  faTint,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const getWeatherIcon = (description) => {
  if (!description) return faRainbow;
  const desc = description.toLowerCase();
  if (desc.includes("clear")) return faSun;
  if (desc.includes("cloud")) return faCloud;
  if (desc.includes("rain")) return faCloudRain;
  if (desc.includes("drizzle")) return faCloudShowersHeavy;
  if (desc.includes("thunder")) return faBolt;
  if (desc.includes("snow")) return faSnowflake;
  if (desc.includes("mist") || desc.includes("fog") || desc.includes("haze"))
    return faSmog;
  return faRainbow;
};

const WeatherBox = ({ weather }) => {
  const date = new Date().toLocaleDateString("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="weather-box">
        <div className="date">{date}</div>
        <div className="city">{weather?.name}</div>

        <div className="condition">
          <FontAwesomeIcon
            icon={getWeatherIcon(weather?.weather[0].description)}
            size="2x"
            style={{ marginRight: "8px" }}
          />
          {weather?.weather[0].description}
        </div>

        <div className="temperature">{Math.round(weather?.main.temp)}℃</div>

        <div className="details">
          <div>
            <FontAwesomeIcon icon={faArrowDown} />{" "}
            {Math.round(weather?.main.temp_min)}℃
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowUp} />{" "}
            {Math.round(weather?.main.temp_max)}℃
          </div>
          <div>
            <FontAwesomeIcon icon={faTint} /> 습도: {weather?.main.humidity}%
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
