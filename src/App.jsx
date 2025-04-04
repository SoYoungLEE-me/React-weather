import { useState, useEffect } from "react";
import { getCurrentWeather } from "./api/weather";
import "./App.css";

//1. 앱이 실행되자 마자 현재 위치 기반의 날씨를 보여준다.=> useEffect
function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const data = await getCurrentWeather(lat, lon);
          console.log(data);
        } catch (error) {
          console.error(error.message); //API 호출 실패 시 에러 처리
        }
      },
      (error) => {
        console.error("위치 접근이 거부되었습니다.", error); //위치 정보 접근 실패 시 에러 처리
      }
    );
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <></>;
}

export default App;
