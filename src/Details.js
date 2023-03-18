import React from "react";

export default function Details() {
  return (
    <div className="Details">
      <div id="btn_details">Show more details</div>
      <div id="btn_content">
        <div className="row justify-content:center">
          <div className="col col-6">
            <strong>T</strong>
            <small>max</small>
            <span id="current_temperature_max"></span> C
          </div>
          <div className="col col-6">
            Humidity is <span id="current_humidity"></span> %
          </div>
          <div className="col col-6">
            <strong>T</strong>
            <small>min</small>
            <span id="current_temperature_min"> </span> C
          </div>
          <div className="col col-6">
            Wind is <span id="current_wind"></span> m/s
          </div>
        </div>
      </div>
    </div>
  );
}
