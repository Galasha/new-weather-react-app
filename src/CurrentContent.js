import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./CurrentContent.css";
import WeatherForecast from "./WeatherForecast";

export default function CurrentContent(props) {
  return (
    <div className="CurrentContent">
      <ul>
        <div className="row">
          <div className="col-6">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </div>

          <div className="col-6">
            <li className="text-capitalize">{props.data.description}</li>
          </div>
        </div>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={58} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {props.data.wind}k/h</li>
          </ul>
        </div>
      </div>
      <WeatherForecast coordinates={props.data.coordinates} />
    </div>
  );
}
