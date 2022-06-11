import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import WeatherInformation from "./WeatherInformation";
import { SpinnerCircular } from "spinners-react";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "42b8ba4c0d3eac619d09938449fa1571";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-wrapper">
          <div className="Weather">
            <form className="mb-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-group col-3">
                  <input
                    type="search"
                    placeholder="Search for a city ..."
                    className="form-control border-end-0 border"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                  <span className="input-group-append">
                    <button
                      className="btn btn-large"
                      type="submit"
                      value={search}
                    >
                      <FontAwesomeIcon
                        icon={solid("search")}
                        inverse
                        size="2x"
                      />
                    </button>
                  </span>
                  <div className="col-2">
                    <button
                      type="button"
                      className="btn current-location"
                      id="current-button"
                    >
                      <FontAwesomeIcon
                        icon={solid("map-marked")}
                        inverse
                        size="2x"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <WeatherInformation data={weatherData} />
            <hr />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <SpinnerCircular color="white" thickness="100" />;
  }
}
