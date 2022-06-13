import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "42b8ba4c0d3eac619d09938449fa1571";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="13d" />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTempMax">8° |</span>
            {""}
            <span className="WeatherForecastTempMin"> 0°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
