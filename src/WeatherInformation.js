import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 col-md-4">
          <div className="clearfix">
            <div className="float-left">
              <span>
                <WeatherIcon code={props.data.icon} size={52} />
              </span>
              <span>
                <WeatherTemperature celsius={props.data.temperature} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
