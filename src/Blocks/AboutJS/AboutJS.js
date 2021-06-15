import React from "react";
import "./AboutJS.css";

export default function AboutJS() {
  return (
    <div className="block">
      <div className="block__content about-js">
        <div className="block__image">
          <img src="img/js-logo.svg" alt="js-logo" />
        </div>
        <div className="block__description">
          Мне нравиться постигать глубины javascript. Люблю работать с ES6+,
          Typescript и современными фреймворк по типу angular.
        </div>

        <div className="block__number">03</div>
      </div>
    </div>
  );
}
