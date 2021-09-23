import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import classes from './AboutJS.module.css';

export default function AboutJS() {
  return (
    <BlockContainer>
      <div className={classes.image}>
        <BlockImage url="img/js-logo.svg" />
      </div>

      <div className={classes.description}>
        <BlockDescription>
          Мне нравиться постигать глубины javascript. Люблю работать с ES6+,
          Typescript и современными фреймворк по типу angular.
        </BlockDescription>
      </div>
      <div className={classes.number}>
        <BlockNumber number="3" />
      </div>
    </BlockContainer>
  );
}
