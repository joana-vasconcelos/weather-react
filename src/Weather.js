import React from "react";
import "./Weather.css";

import sunny from "./images/01d.png";
import maxTemp from "./images/max-temp.png";
import minTemp from "./images/min-temp.png";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-3 current-weather">
          <img src={sunny} alt="" width="150px" id="weather-icon" />
        </div>

        <div className="col-4 current-day">
          <div className="current-day-text">
            <h1 className="temperature">
              {" "}
              <span id="temperature">{props.temperature}</span>°
            </h1>
            <p className="day-hour">
              <span id="day-month">
                {props.day} {props.date} {props.month}
              </span>
              <br />
              <span id="hour-minute">
                {props.hours}:{props.minutes}
              </span>
            </p>
            <p className="temperature max-min">
              <img src={maxTemp} alt="" width="30px" />
              <span id="max-current-temp">
                <strong>{props.maxTemperature}</strong>
              </span>{" "}
              <strong>°</strong>
              <img src={minTemp} alt="" width="30px" />{" "}
              <span id="min-current-temp">{props.minTemperature}</span>°
            </p>
          </div>
        </div>
        <div className="col-3 current-characteristics">
          <p>
            <span id="current-sky">{props.currentSky}</span>
            <br />
            Feels like <span id="feels-like">{props.feelsLike}</span>°
            <br />
            Humidity <span id="humidity">{props.humidity}</span>%
            <br />
            Wind <span id="wind">{props.wind}</span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
