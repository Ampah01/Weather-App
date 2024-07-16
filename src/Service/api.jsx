import axios from "axios";


const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9a7760938cmsh90ac34a02cb429ep1887e0jsnb9f08b6ace2f",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};


const loadOptions = async (inputValue) => {
  try {
    const response = await axios.request({
      ...geoApiOptions,
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
      params: {
        namePrefix: inputValue,
      },
    });
    return {
      options: response.data.data.map((city) => ({
        value: `${city.latitude},${city.longitude}`,
        label: `${city.name} ${city.countryCode}`,
      })),
    };
  } catch (error) {
    console.error("Error loading options:", error);
    return {
      options: [],
    };
  }
};


const API_KEY = "https://api.openweathermap.org/data/2.5";
const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;


const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(`${API_KEY}/weather`, {
      params: {
        lat: lat,
        lon: lon,
        appid: weatherKey,
        units: "metric",
      },
    });
    console.log("Weather data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};


const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${API_KEY}/forecast`, {
      params: {
        lat: lat,
        lon: lon,
        appid: weatherKey,
        units: "metric",
      },
    });
    console.log("Forecast data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    return null;
  }
};

export { loadOptions, fetchWeatherData, fetchForecast };
