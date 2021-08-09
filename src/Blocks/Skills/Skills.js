import React from 'react';
import './Skills.css';

const bullets = [
  'HTML ',
  'CSS ',
  'JavaScript',
  'Angular',
  'TypeScript',
  'RxJS ',
  'HTMI',
  'React ',
  'Redux ',
  'JavaSсript ',
  'Webpack ',
  'Git ',
  'Linux ',
  'ООП ',
  'TypeSсript',
  'SASS ',
  'Кроссбраузерная верстка ',
  'Адаптивная верстка ',
  'JavaScrlpt',
  'Adobe Photoshop ',
  'Adobe Illustrator ',
  'Figma ',
  'Computer science',
];

export default function Skills() {
  return (
    <div className="block">
      <div className="block__content skills">
        <div className="block__title">ТЕХНОЛОГИИ:</div>

        <div className="bullets">
          {bullets.map((bullet) => (
            <span className="bullets__item" key={bullet}>{bullet}</span>
          ))}
        </div>

        <div className="block__number">04</div>
        <div className="block__text">и многое другое...</div>
      </div>
    </div>
  );
}
