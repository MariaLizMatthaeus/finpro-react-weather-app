import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="container">
        <div className="row mt-3">
          <div className="col col-2">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
          </div>
          <div className="col col-4">
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>

          <div className="col">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
