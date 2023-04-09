import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Bgimage from "./images/background3.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="background">
        <img
          className="h-100 w-100"
          id="background_img"
          src={Bgimage}
          alt="Weather Forecast APP"
        />
      </div>
      <div className="container">
        <h1>Weather forecast</h1>
        <Search defaultCity="" />
        <div className="tab" id="tab_content">
          <div className="tabcontent" id="Forecast_Today"></div>
        </div>
      </div>

      <footer>
        This project was coded by{" "}
        <a
          href="https://gregarious-lebkuchen-6cdaef.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alina Gavrylenko
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Galasha/new-weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://animated-chimera-85a61a.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
