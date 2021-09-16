import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import './AboutJS.css';

export default function AboutJS() {
  return (
    <div className="block">
      <div className="block__content about-js">
        <div className="block__image">
          <ParallaxScrolling
            deltaStart={-20}
            deltaEnd={-80}
          >
            <img src="img/js-logo.svg" alt="js-logo" />
          </ParallaxScrolling>

        </div>
        <div className="block__description">
          <ParallaxScrolling>
            Мне нравиться постигать глубины javascript. Люблю работать с ES6+,
            Typescript и современными фреймворк по типу angular.
          </ParallaxScrolling>
        </div>

        <div className="block__number">03</div>
      </div>
    </div>
  );
}
