import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import WeatherInformation from "./WeatherInformation";
import WeatherForecast from "./WeatherForecast";
import { SpinnerCircular } from "spinners-react";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  let [coordinates, setCoordinates] = useState({ ready: false });

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
    if (city) {
      axios.get(primaryApiUrl).then(handleResponse);
    } else {
      alert("Please search for a city");
    }
  }
  let apiKey = `42b8ba4c0d3eac619d09938449fa1571`;
  let primaryApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function locatePosition() {
    navigator.geolocation.getCurrentPosition(findPosition);
  }

  function findPosition(position) {
    setCoordinates({
      ready: true,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    if (coordinates.ready) {
      axios.get(geolocationUrl).then(handleResponse);
    }
  }

  let geolocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`;

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
                    <button className="btn btn-large" type="submit">
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
                      onClick={locatePosition}
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
            <hr /> <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    let defaultApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(defaultApiUrl).then(handleResponse);
    return <SpinnerCircular color="white" thickness="100" />;
  }
}
