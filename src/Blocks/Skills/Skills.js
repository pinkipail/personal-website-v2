import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';

import classes from './Skills.module.css';

function Skills() {
  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="ТЕХНОЛОГИИ:" />
      </div>
      <div className={classes.bullets}>
        {bullets.map((bullet) => (
          <span
            className={classes.bulletsItem}
            key={bullet}
          >
            {bullet}
          </span>
        ))}
      </div>
      <div className={classes.number}>
        <BlockNumber number="4" />
      </div>
      <div className={classes.text}>
        {/* TODO: Поменять текст */}
        и многое другое...
      </div>
    </BlockContainer>
  );
}

// TODO: актуализировать Скилы
const bullets = [
  'HTML ',
  'CSS ',
  'JavaScript',
  'Angular',
  'TypeScript',
  'RxJS ',
  'HTML',
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

export default Skills;
