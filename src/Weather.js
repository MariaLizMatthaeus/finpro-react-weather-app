import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    temperature: 19,
    date: "Saturday 17:48",
    description: "Clear sky",
    imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    humidity: 41,
    wind: 7,
  };

  return (
    <div className="container">
      <div className="weather-wrapper">
        <div className="Weather">
          <Search />
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: <span>{weatherData.date}</span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt="sunny"
                  className="float-left"
                />
                <span className="float-left">
                  <strong>{weatherData.temperature} </strong>
                  <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>{" "}
                    |
                    <a href="/" className="inactive">
                      °F
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}</span> %
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
