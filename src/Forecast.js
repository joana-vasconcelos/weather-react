import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
 <div class="week-forecast">
          <div class="day-forecast">
            <p class="day-temp">Saturday</p>
            <p class="temperature"><strong> 20°</strong> | 13°</p>
            <img src="images/cloudy-sun.png" alt="" class="weather-img" />
          </div>

          <div class="day-forecast">
            <p class="day-temp">Sunday</p>
            <p class="temperature"><strong> 18°</strong> | 12°</p>
            <img src="images/cloudy-sun.png" alt="" class="weather-img" />
          </div>

          <div class="day-forecast">
            <p class="day-temp">Monday</p>
            <p class="temperature"><strong> 16°</strong> | 10°</p>
            <img src="images/rainy-sun.png" alt="" class="weather-img" />
          </div>

          <div class="day-forecast">
            <p class="day-temp">Tuesday</p>
            <p class="temperature"><strong> 15°</strong> | 12°</p>
            <img src="images/rainy.png" alt="" class="weather-img" />
          </div>

          <div class="day-forecast">
            <p class="day-temp">Wednesday</p>
            <p class="temperature"><strong> 16°</strong> | 12°</p>
            <img src="images/windy.png" alt="" class="weather-img" />
          </div>

          <div class="day-forecast">
            <p class="day-temp">Thursday</p>
            <p class="temperature"><strong> 16°</strong> | 11°</p>
            <img src="images/rainy.png" alt="" class="weather-img" />
          </div>

          <div class="day-forecast">
            <p class="day-temp">Friday</p>
            <p class="temperature"><strong> 18°</strong> | 13°</p>
            <img src="images/rainy-sun.png" alt="" class="weather-img" />
          </div>
        </div>
    );
}