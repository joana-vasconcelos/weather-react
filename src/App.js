import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="frame">
          <Weather defaultCity="Lisbon" />
          <hr class="line" />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
