import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="block">
      <div className="block__content about-me">
        <div className="block__image">
          <ParallaxScrolling
            deltaStart={-20}
            deltaEnd={-80}
          >
            <img src="img/photo-me.svg" alt="me" />
          </ParallaxScrolling>

        </div>
        <div className="block__description">
          <ParallaxScrolling>
            Активно развиваюсь в web-разработке. Работаю с Angular,
            параллельно изучаю React, читаю статьи, смотрю интервью.
          </ParallaxScrolling>
        </div>

        <div className="block__number">02</div>
      </div>
    </div>
  );
}
