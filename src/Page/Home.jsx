import React, { useState } from "react";
import Searchbar from "../Components/Searchbar/Searchbar";
import CurrentWeather from "../Components/CurrentWeather/CurrentWeather";
import { fetchWeatherData, fetchForecast } from "../Service/api";
import Forecast from "../Components/Forecast/Forecast";
import Todo from "../Components/Todo/Todo";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleInputChange = (inputValue) => {
    const [lat, lon] = inputValue.value.split(",");

    Promise.all([fetchWeatherData(lat, lon), fetchForecast(lat, lon)])
      .then(([weather, forecast]) => {
        if (weather && forecast) {
          setWeatherData({ city: inputValue.label, ...weather });
          setForecastData({ city: inputValue.label, ...forecast });
        } else {
          console.error("Failed to fetch weather or forecast data.");
          setWeatherData(null);
          setForecastData(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching weather or forecast data:", err);
        setWeatherData(null);
        setForecastData(null);
      });
  };

  console.log(weatherData);
  console.log(forecastData);

  return (
    <div className="w-full min-h-screen px-4 py-8 home-container ">
      <Searchbar inputChange={handleInputChange} />
      {weatherData && <CurrentWeather weather={weatherData} />}
      {forecastData && <Forecast forecast={forecastData} />}
      <Todo />
    </div>
  );
};

export default Home;
