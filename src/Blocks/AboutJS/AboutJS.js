import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './AboutJS.module.css';

export default function AboutJS() {
  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="О РАБОТЕ:" />
      </div>
      <div className={classes.container}>
        <div className={classes.description}>
          <BlockDescription>
            Мне нравится создавать интерактивные WEB-<br />
            приложения с акцентом на анимированный<br />
            контент, производительность и отзывчивость.<br />
            Люблю работать с актуальными технологиями:<br />
            ES6+, Typescript, angular и REACT.<br />
          </BlockDescription>
        </div>

        <div className={classes.image}>
          <BlockImage src="img/js-logo.svg" height="57.5rem" />
        </div>
      </div>

      <div className={classes.number}>
        <BlockNumber value="3" />
      </div>
    </BlockContainer>
  );
}
