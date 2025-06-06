import { useState, useEffect } from "react";
import { getCurrentWeather, getWeatherByCityName } from "./api/weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자 마자 현재 위치 기반의 날씨를 보여준다.=> useEffect
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const cities = ["New York", "Tokyo", "Paris", "Seoul", "London"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const data = await getCurrentWeather(lat, lon);

          setWeather(data);
        } catch (error) {
          console.error(error.message); //API 호출 실패 시 에러 처리
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("위치 접근이 거부되었습니다.", error); //위치 정보 접근 실패 시 에러 처리
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      if (city === "") {
        getCurrentLocation();
      } else {
        try {
          const data = await getWeatherByCityName(city);
          setWeather(data);
        } catch (err) {
          console.error(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader color="#fafcff" loading={loading} size={150} />
        </div>
      ) : (
        <>
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            selectedCity={city}
          />
        </>
      )}
    </div>
  );
}

export default App;
