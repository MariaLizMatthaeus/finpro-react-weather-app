import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Search() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="input-group col-3">
          <input
            type="search"
            placeholder="Search for a city ..."
            className="form-control border-end-0 border"
            autoComplete="off"
          />
          <span className="input-group-append">
            <button className="btn btn-large" type="submit">
              <FontAwesomeIcon icon={solid("search")} inverse size="2x" />
            </button>
          </span>
          <div className="col-2">
            <button
              type="button"
              className="btn current-location"
              id="current-button"
            >
              <FontAwesomeIcon icon={solid("map-marked")} inverse size="2x" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
