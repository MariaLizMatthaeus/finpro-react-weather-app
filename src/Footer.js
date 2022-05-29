import React from "react";

export default function Footer() {
  return (
    <small className="credits">
      This project is{" "}
      <a
        href="https://github.com/MariaLizMatthaeus/finpro-react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-source code
      </a>{" "}
      hosted on <a href="https://www.netlify.com/">Netlify</a> coded by Maria
      Matthäus with 🖤 and caring support by{" "}
      <a href="https://www.shecodes.io/">SheCodes</a>
      <div>
        image credits:{" "}
        <a href="https://pixabay.com/illustrations/abstract-dust-background-wallpaper-5719221/">
          Tomislav Jakupec
        </a>
      </div>
    </small>
  );
}
