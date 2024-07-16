import React from "react";

const CurrentWeather = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const { city, weather: weatherDetails, main, wind } = weather;
  const weatherDescription = weatherDetails[0].description;
  const weatherIcon = weatherDetails[0].icon;

  return (
    <div className="max-w-xs p-6 mx-auto mt-10 border border-white rounded-lg shadow-md -z-1 bg-white/30 backdrop-blur-lg border-opacity-30">
      <div className="mb-4 text-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="weather_image"
          className="w-20 h-20 mx-auto border-2 border-white rounded-full"
        />
      </div>
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold text-white">{city}</h2>
        <p className="text-sm text-gray-100 capitalize">{weatherDescription}</p>
      </div>
      <div className="text-center text-white">
        <p className="text-3xl font-semibold">{Math.round(main.temp)}°C</p>
        <div className="flex justify-between mt-4">
          <div className="flex-1 text-center">
            <p className="text-sm">Feels like</p>
            <p className="text-lg font-medium">{main.feels_like}°C</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-sm">Wind</p>
            <p className="text-lg font-medium">{wind.speed} m/s</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex-1 text-center">
            <p className="text-sm">Humidity</p>
            <p className="text-lg font-medium">{main.humidity}%</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-sm">Pressure</p>
            <p className="text-lg font-medium">{main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
