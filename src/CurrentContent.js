import React, { useState } from "react";

export default function CurrentContent(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function updateTemperature(event) {
    event.preventDefault();
    setTemperature(props.temperature + 5);
  }
  return (
    <div className="CurrentContent">
      <div className="row justify-content:start">
        <div className="col col-sm-6 ms-0" id="current_date">
          Saturday. March, 4
        </div>
        <div className="col col-sm-6 currentIcon">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            id="current_weather_image"
            alt="Current Weather Icon"
          />
          <span
            id="current_weather_temperature"
            onMouseOver={updateTemperature}
          >
            {temperature}
            °C | °F
          </span>
        </div>
      </div>

      <div className="col col-sm-6" id="current_time">
        21:12
      </div>
      <div
        className="col col-sm-6 description"
        id="current_weather_description"
      >
        Cloudy
      </div>
    </div>
  );
}
