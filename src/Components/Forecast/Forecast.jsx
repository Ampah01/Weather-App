import React, { useState } from "react";
import useDateTime from "../../Utils/Date";

const Forecast = ({ forecast }) => {
  const { time } = useDateTime();
  const [activeIndex, setActiveIndex] = useState(null);

  if (!forecast || !forecast.list || forecast.list.length === 0) {
    return null;
  }

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek)
    .concat(weekDays.slice(0, dayInAWeek));

  return (
    <div className="max-w-2xl p-4 mx-auto mt-10 border border-white rounded-lg shadow-md bg-white/30 backdrop-blur-lg border-opacity-30">
      <h2 className="mb-4 text-2xl font-semibold text-center text-white">
        {forecast.city.name} - 7 Day Forecast
      </h2>
      <p className="mb-2 text-center text-white">Current Time: {time}</p>
      <div className="divide-y divide-gray-200">
        {forecast.list.slice(0, 7).map((data, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex items-center justify-between p-3 rounded-lg shadow-lg cursor-pointer bg-white/30 backdrop-blur-lg border border-white border-opacity-30 ${
                activeIndex === index ? "bg-white/30" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt="weather_icon"
                  className="w-10 h-10 mr-3"
                />
                <p className="font-semibold text-white text-md">
                  {forecastDays[index]}
                </p>
              </div>
              <svg
                className={`w-6 h-6 text-white ${activeIndex === index ? "transform rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="p-3 border border-white rounded-b-lg shadow-md bg-white/30 backdrop-blur-lg border-opacity-30">
                <div className="text-gray-900 text-[16px]">
                  <p className="mb-1">Min Temp: {Math.round(data.main.temp_min)}°C</p>
                  <p className="mb-1">Max Temp: {Math.round(data.main.temp_max)}°C</p>
                  <p className="mb-1">Wind Speed: {data.wind.speed} m/s</p>
                  <p className="mb-1">Humidity: {data.main.humidity}%</p>
                </div>
                <p className="mt-2 text-sm capitalize text-slate-50">
                  Weather: {data.weather[0].description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
