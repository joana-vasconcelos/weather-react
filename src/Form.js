import React from "react";
import "./Form.css";

import pin from "./images/pin.png";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-city-form">
        <input
          type="search"
          placeholder="Enter city here"
          className="search-city"
          id="city-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <img src={pin} alt="" className="location-pin" id="location-pin" />
    </div>
  );
}
