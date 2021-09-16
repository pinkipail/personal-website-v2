import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import './About.css';

export default function About() {
  return (
    <div className="block">
      <div className="block__content about">
        <div className="block__title">
          ОБО МНЕ:
        </div>

        <div className="block__image">
          <ParallaxScrolling
            deltaStart={-20}
            deltaEnd={-80}
          >
            <img src="img/map.svg" alt="map" />
          </ParallaxScrolling>
        </div>
        <div className="block__description">
          <ParallaxScrolling>
            Я вырос в небольшой деревни Новоегорьевское, что в Алтайском крае.
          </ParallaxScrolling>
        </div>

        <div className="block__number">
          01
        </div>
      </div>
    </div>
  );
}
