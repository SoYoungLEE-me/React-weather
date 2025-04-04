import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeather = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather`;

  try {
    const response = await axios.get(url, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("날씨 정보를 불러오는데 실패하였습니다.");
  }
};
