import React from "react";
import "./Skills.css";

const bullets = [
  "HTML ",
  "CSS ",
  "JavaScript",
  "Angular",
  "TypeScript",
  "RxJS ",
  "HTML",
  "React ",
  "Redux ",
  "JavaScript ",
  "Webpack ",
  "Git ",
  "Linux ",
  "ООП ",
  "TypeScript",
  "SASS ",
  "Кроссбраузерная верстка ",
  "Адаптивная верстка ",
  "JavaScript",
  "Adobe Photoshop ",
  "Adobe Illustrator ",
  "Figma ",
  "Computer science",
];

export default function Skills() {
  return (
    <div className="block">
      <div className="block__content skills">
        <div className="block__title">ТЕХНОЛОГИИ:</div>

        <div className="bullets">
          {bullets.map((bullet, i) => (
            <span className="bullets__item" key={i}>{bullet}</span>
          ))}
        </div>

        <div className="block__number">04</div>
        <div className="block__text">и многое другое...</div>
      </div>
    </div>
  );
}
