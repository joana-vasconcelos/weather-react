import React from "react";
import "./Location.css";

export default function Location(props) {
  return (
    <div className="Location">
      <ul className="currently">
        <li>
          <h2 className="city" id="city">
            {props.city}
          </h2>
        </li>
        <li className="country" id="country">
          {props.country}
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
  );
}
