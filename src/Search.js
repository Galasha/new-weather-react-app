import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [header, setHeader] = useState({});
  const [loaded, setLoaded] = useState(false);

  function updateTemperature(response) {
    setLoaded(true);
    setHeader({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp)
    });
  }

  function getInfo(event) {
    event.preventDefault();
    let apiKey = "3fa4eb6152e0b339ca92b5b3898a85ef";
    let unit = "Metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(updateTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form id="search_form" onSubmit={getInfo}>
      <div className="dropdown_menu">
        <input
          onChange={updateCity}
          type="text"
          placeholder="Enter a city..."
          autoComplete="off"
          id="search_city_name"
        />
        <input type="submit" value="Search" id="btn_search" />
        <div className="dropdown_content">
          <a href="/">Use your location</a>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        <h1>
          The current temperature in {header.name} is {header.temperature}C
        </h1>
        {form}
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
