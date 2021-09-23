import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import classes from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <BlockContainer>
      <div className={classes.image}>
        <BlockImage url="img/photo-me.svg" />
      </div>

      <div className={classes.description}>
        <BlockDescription>
          Активно развиваюсь в web-разработке. Работаю с Angular,
          параллельно изучаю React, читаю статьи, смотрю интервью.
        </BlockDescription>
      </div>
      <div className={classes.number}>
        <BlockNumber number="2" />
      </div>
    </BlockContainer>
  );
}
