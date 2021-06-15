import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="block">
      <div className="block__content about-me">
        <div className="block__image">
          <img src="img/photo-me.png" alt="me" />
        </div>
        <div className="block__description">
          Активно развиваюсь в web-разработке. Работаю с Angular, параллельно изучаю React, читаю статьи, смотрю интервью.
        </div>

        <div className="block__number">02</div>
      </div>
    </div>
  );
}
