import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentContent from "./CurrentContent";
import Header from "./Header";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
      country: response.data.sys.country
    });
  }

  console.log(weatherData);
  function search() {
    let units = "Metric";
    let apiKey = "3fa4eb6152e0b339ca92b5b3898a85ef";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  function getInfo(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={getInfo} className="search_form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary " />
          </div>
        </div>
      </form>
    </div>
  );

  if (weatherData.ready) {
    return (
      <div className="Search">
        <h1 data={weatherData}>
          <Header city={weatherData} />
        </h1>
        {form}

        <CurrentContent data={weatherData} />
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
