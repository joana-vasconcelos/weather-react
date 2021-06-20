import React, { useState } from "react";
import "./Weather.css";
import formattedDate from "./formattedDate";
import axios from "axios";

import maxTemp from "./images/max-temp.png";
import minTemp from "./images/min-temp.png";
import pin from "./images/pin.png";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0d9bd7b9270c9eee20fc452755853c0d";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter city here"
          className="search-city"
          onChange={showCity}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <img src={pin} alt="" className="location-pin" id="location-pin" />
    </div>
  );

  return (
    <div>
      <div className="Form">{form}</div>
      <div className="Location">
        <ul className="currently">
          <li>
            <h2 className="city" id="city">
              {weather.city}
            </h2>
          </li>
          <li className="country" id="country">
            {weather.country}
          </li>
          <li className="units">
            {" "}
            <a href="/" id="celsius" className="active">
              °C
            </a>{" "}
            |{" "}
            <a href="/" id="fahrenheit">
              °F
            </a>{" "}
          </li>
        </ul>
      </div>

      <div className="Weather">
        <div className="row">
          <div className="col-3 current-weather">
            <img src={weather.icon} alt="" width="150px" id="weather-icon" />
          </div>

          <div className="col-4 current-day">
            <div className="current-day-text">
              <h1 className="temperature">
                {" "}
                <span id="temperature">{Math.round(weather.temperature)}</span>°
              </h1>

              <formattedDate date={weather.date} />

              <p className="temperature max-min">
                <img src={maxTemp} alt="" width="30px" />
                <span id="max-current-temp">
                  <strong>{Math.round(weather.maxTemperature)}</strong>
                </span>{" "}
                <strong>°</strong>
                <img src={minTemp} alt="" width="30px" />{" "}
                <span id="min-current-temp">
                  {Math.round(weather.minTemperature)}
                </span>
                °
              </p>
            </div>
          </div>
          <div className="col-3 current-characteristics">
            <p>
              <span id="current-sky">{weather.description}</span>
              <br />
              Feels like{" "}
              <span id="feels-like">{Math.round(weather.feelsLike)}</span>°
              <br />
              Humidity <span id="humidity">{weather.humidity}</span>%
              <br />
              Wind <span id="wind">{Math.round(3.6 * weather.wind)}</span> km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
