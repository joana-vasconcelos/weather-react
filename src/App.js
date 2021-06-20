import "./App.css";
import Form from "./Form";
import Location from "./Location";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="frame">
          <Form />
          <Location city="Lisbon" country="PT" />
          <Weather
            temperature={24}
            day="Saturday"
            date={5}
            month="April"
            hours={15}
            minutes={37}
            maxTemperature={26}
            minTemperature={18}
            currentSky="Sunny"
            feelsLike={23}
            humidity={35}
            wind={6}
          />
        </div>
      </div>
    </div>
  );
}
