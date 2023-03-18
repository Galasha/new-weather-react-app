import "./App.css";

import Search from "./Search";
import Tab from "./Tab";
import CurrentContent from "./CurrentContent";
import Details from "./Details";
import Tabcontent from "./Tabcontent";
import Bgimage from "./images/background3.jpg";
import Header from "./Header"


export default function App() {
  return (
    <div className="App">
      <div className="background">
        <img id="background_img" src={Bgimage} alt="Weather Forecast APP" />
      </div>
      <div className="container">
        <Header />
        <Search />
        <div className="tab" id="tab_content">
          <Tab value="Current Weather" />
          <Tab value="Forecast for 3 days" />
          <Tab value="Forecast for 6 days" />

          <div className="tabcontent" id="Forecast_Today">
            <CurrentContent temperature={19} />
            <Details />
          </div>

          <div className="tabcontent" id="forecast_3">
            <Tabcontent />
          </div>
          <div className="tabcontent" id="forecast_6">
            <Tabcontent />
          </div>
        </div>
        <p>
          Created by Alina Gavrylenko,
          <a
            href="https://github.com/Galasha/new-weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
