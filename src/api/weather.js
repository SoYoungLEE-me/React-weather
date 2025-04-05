import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather`;

const fetchWeather = async (params) => {
  try {
    const response = await axios.get(url, {
      params: {
        ...params,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw new Error("날씨 정보를 불러오는 데 실패했습니다.");
  }
};

// 현재 위치 기반
export const getCurrentWeather = async (lat, lon) => {
  return await fetchWeather({ lat, lon });
};

// 도시명 기반
export const getWeatherByCityName = async (city) => {
  return await fetchWeather({ q: city });
};
